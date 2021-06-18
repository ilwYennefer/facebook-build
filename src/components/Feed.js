import styled from "styled-components";
import tw from "twin.macro";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
  return (
    <Container>
      <InnerContainer>
        <Stories />
        <InputBox />
        <Posts />
      </InnerContainer>
    </Container>
  );
}

export default Feed;

const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  ${tw`
    flex-grow
    h-screen
    pb-44
    pt-6
    mr-4
    xl:mr-40
    overflow-y-auto
    // scrollbar-hide
  `}
`;

const InnerContainer = styled.div`
  ${tw`
    mx-auto
    max-w-md
    md:max-w-lg
    lg:max-w-2xl
  `}
`;
