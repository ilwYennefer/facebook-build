import styled from "styled-components";
import tw from "twin.macro";

function SidebarRow({ Icon, title, src }) {
  return (
    <Container>
      {src && <UserImg src={src} alt={title} />}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <Title>{title}</Title>
    </Container>
  );
}

export default SidebarRow;

const Container = styled.div`
  ${tw`
    flex
    items-center
    space-x-2
    p-4
    hover:bg-gray-200
    rounded-xl
    cursor-pointer
  `}
`;

const UserImg = styled.img`
  ${tw`
    w-9
    h-9
    rounded-full
  `}
`;

const Title = styled.p`
  ${tw`
    hidden
    sm:inline-flex
    font-medium
  `}
`;
