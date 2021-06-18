import styled from "styled-components";
import tw from "twin.macro";

function HeaderIcon({ Icon, active }) {
  return (
    <Container className="group">
      <Icon
        className={`h-5 text-gray-500 group-hover:text-blue-500 text-center sm:h-7 mx-auto ${
          active && "text-blue-500"
        }`}
      />
    </Container>
  );
}

export default HeaderIcon;

const Container = styled.div`
  ${tw`
    flex
    items-center
    rounded-xl
    cursor-pointer
    md:px-10
    sm:h-14
    md:hover:bg-gray-100
    active:border-b-2
    active:border-blue-500
  `}
`;
