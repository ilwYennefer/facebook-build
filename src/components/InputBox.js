import styled from "styled-components";
import tw from "twin.macro";
import { useAuthState } from "react-firebase-hooks/auth";
import db, { auth, storage } from "../firebase";
import {
  CameraIcon,
  EmojiHappyIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { useRef, useState } from "react";
import firebase from "firebase";

function InputBox() {
  const [user] = useAuthState(auth);
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          // funky upload stuff
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              // when the upload completes
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((downloadURL) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: downloadURL,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <Container>
      <Top>
        <UserImg src={user.photoURL} alt="" />
        <Form>
          <TextInput
            type="text"
            placeholder={`What's on your mind ${user.displayName}?`}
            ref={inputRef}
          />
          <Button hidden onClick={sendPost} type="submit">
            Submit
          </Button>
          {imageToPost && (
            <SelectedImgContainer onClick={removeImage}>
              <SelectedImg src={imageToPost} />
              <Remove>Remove</Remove>
            </SelectedImgContainer>
          )}
        </Form>
      </Top>
      <Bottom>
        <IconContainer>
          <VideoCameraIcon className="h-7 text-red-500" />
          <IconText>Live Video</IconText>
        </IconContainer>
        <IconContainer onClick={() => filepickerRef.current.click()}>
          <CameraIcon className="h-7 text-green-400" />
          <IconText>Photo/Video</IconText>
          <FileInput
            type="file"
            hidden
            onChange={addImageToPost}
            ref={filepickerRef}
          />
        </IconContainer>
        <IconContainer>
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <IconText>Feeling/Activity</IconText>
        </IconContainer>
      </Bottom>
    </Container>
  );
}

export default InputBox;

const Container = styled.div`
  ${tw`
      bg-white
      p-2
      rounded-2xl
      shadow-md
      text-gray-500
      font-medium
      mt-6
  `}
`;

const Top = styled.div`
  ${tw`
    flex
    space-x-4
    p-4
    items-center
  `}
`;

const UserImg = styled.img`
  ${tw`
    w-12
    h-12
    rounded-full
  `}
`;

const Form = styled.form`
  ${tw`
    flex
    flex-1
  `}
`;

const TextInput = styled.input`
  ${tw`
    rounded-full
    h-12
    bg-gray-100
    flex-grow
    px-5
    focus:outline-none

  `}
`;

const Button = styled.button`
  ${tw`
  `}
`;

const Bottom = styled.div`
  ${tw`
    flex
    justify-evenly
    p-3
    border-t
  `}
`;

const IconContainer = styled.div`
  ${tw`
    flex
    items-center
    space-x-1
    hover:bg-gray-100
    flex-grow
    justify-center
    p-2
    rounded-xl
    cursor-pointer
  `}
`;

const IconText = styled.p`
  ${tw`
    text-xs
    sm:text-sm
    xl:text-base
  `}
`;

const FileInput = styled.input`
  ${tw`

  `}
`;

const SelectedImgContainer = styled.div`
  ${tw`
    flex
    flex-col
    filter
    hover:brightness-110
    transition
    duration-150
    transform
    hover:scale-105
    cursor-pointer
  `}
`;

const SelectedImg = styled.img`
  ${tw`
    object-contain
    h-10
  `}
`;

const Remove = styled.p`
  ${tw`
    text-red-500
    text-xs
    text-center
  `}
`;
