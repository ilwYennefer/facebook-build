import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import styled from "styled-components";
import tw from "twin.macro";

function Post({ name, image, postImage, message, email, timestamp }) {
  return (
    <Container>
      <Top>
        <UserInfoContainer>
          <UserImg src={image} />
          <UserInfo>
            <UserName>{name}</UserName>
            <Timestamp>
              {new Date(timestamp?.toDate()).toLocaleString()}
            </Timestamp>
          </UserInfo>
        </UserInfoContainer>
        <Message>{message}</Message>
      </Top>
      {postImage && (
        <PostImgContainer>
          <PostImg src={postImage} loading="lazy" />
        </PostImgContainer>
      )}
      <Bottom>
        <IconContainer className="rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <IconText>Like</IconText>
        </IconContainer>
        <IconContainer>
          <ChatAltIcon className="h-4" />
          <IconText>Comment</IconText>
        </IconContainer>
        <IconContainer className="rounded-br-2xl">
          <ShareIcon className="h-4" />
          <IconText>Share</IconText>
        </IconContainer>
      </Bottom>
    </Container>
  );
}

export default Post;

const Container = styled.div`
  ${tw`
    flex
    flex-col
  `}
`;

const Top = styled.div`
  ${tw`
    p-5
    bg-white
    mt-5
    rounded-t-2xl
    shadow-sm
  `}
`;

const UserInfoContainer = styled.div`
  ${tw`
    flex
    items-center
    space-x-2
  `}
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  ${tw`
    rounded-full
  `}
`;

const UserInfo = styled.div``;

const UserName = styled.p`
  ${tw`
    font-medium
  `}
`;

const Timestamp = styled.p`
  ${tw`
    text-xs
    text-gray-400
  `}
`;

const Message = styled.p`
  ${tw`
    pt-4
  `}
`;

const PostImgContainer = styled.div`
  ${tw`
    relative
    h-56
    md:h-96
    bg-white
  `}
`;

const PostImg = styled.img`
  ${tw`
    object-cover
    w-full
    h-full
  `}
`;

const Bottom = styled.div`
  ${tw`
    flex
    justify-between
    items-center
    rounded-b-2xl
    bg-white
    shadow-md
    text-gray-400
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
    cursor-pointer
  `}
`;

const IconText = styled.p`
  ${tw`
    text-xs
    sm:text-base
  `}
`;
