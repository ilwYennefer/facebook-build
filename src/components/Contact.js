import styled from "styled-components";
import tw from "twin.macro";

function Contact({ src, name }) {
  return (
    <Container>
      <ContactImg src={src} />
      <ContactName>{name}</ContactName>
      <OnlineDot />
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  ${tw`
    flex
    items-center
    space-x-3
    mb-2
    relative
    hover:bg-gray-200
    cursor-pointer
    p-2
    rounded-xl
  `}
`;

const ContactImg = styled.img`
  width: 50px;
  height: 50px;
  ${tw`
    object-cover
    rounded-full
  `}
`;

const ContactName = styled.p``;

const OnlineDot = styled.div`
  ${tw`
    absolute
    bottom-2
    left-7
    bg-green-400
    h-3
    w-3
    rounded-full
  `}
`;
