import styled from "styled-components";
import tw from "twin.macro";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  FlagIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Left>
        <Logo src="https://links.papareact.com/5me" alt="" loading="lazy" />
        <SearchContainer>
          <SearchIconO />
          <Input type="text" placeholder="Search Facebook" />
        </SearchContainer>
      </Left>
      <Center>
        <IconsContainer>
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </IconsContainer>
      </Center>
      <Right>
        <UserImg
          src={user.photoURL}
          onClick={() => auth.signOut()}
          loading="lazy"
        />
        <Username>{user.displayName}</Username>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </Right>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  ${tw`
    sticky
    top-0
    z-50
    bg-white
    flex
    items-center
    p-2
    lg:px-5
    shadow-md
  `}
`;

const Left = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const Logo = styled.img`
  ${tw`
    w-12
    h-12
    object-contain
  `}
`;

const SearchContainer = styled.div`
  ${tw`
    flex
    ml-2
    items-center
    rounded-full
    bg-gray-100
    p-2
  `}
`;

const Input = styled.input`
  ${tw`
    hidden
    md:inline-flex
    ml-2
    items-center
    bg-transparent
    focus:outline-none
    placeholder-gray-500
    flex-shrink
  `}
`;

const SearchIconO = styled(SearchIcon)`
  ${tw`
    h-6
    text-gray-600
  `}
`;

const Center = styled.div`
  ${tw`
    flex
    justify-center
    flex-grow
  `}
`;

const IconsContainer = styled.div`
  ${tw`
    flex
    space-x-2
    md:space-x-6
  `}
`;

const Right = styled.div`
  ${tw`
    flex
    items-center
    sm:space-x-2
    justify-end
  `}
`;

const UserImg = styled.img`
  ${tw`
    rounded-full
    cursor-pointer
    w-12
    h-12
  `}
`;

const Username = styled.p`
  ${tw`
    font-semibold
    pr-3
    whitespace-nowrap
  `}
`;
