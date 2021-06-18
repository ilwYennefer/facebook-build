import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  DesktopComputerIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import tw from "twin.macro";
import { auth } from "../firebase";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  max-width: 600px;

  @media (min-width: 1280px) {
    min-width: 300px;
  }
  ${tw`
    p-2
    mt-5
  `}
`;
