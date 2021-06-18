import styled from "styled-components";
import tw from "twin.macro";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <Container>
      <FacebookImg src="https://links.papareact.com/t4i" />
      <LoginText onClick={signIn}>Login with Facebook</LoginText>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  ${tw`
    grid
    place-items-center
  `}
`;

const FacebookImg = styled.img`
  height: 400px;
  width: 400px;
  object-fit: contain;
`;

const LoginText = styled.h1`
  ${tw`
    p-5
    bg-blue-500
    rounded-full
    text-white
    text-center
    cursor-pointer
  `}
`;
