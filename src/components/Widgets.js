import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import styled from "styled-components";
import tw from "twin.macro";
import Contact from "./Contact";

const contacts = [
  { src: "https://links.papareact.com/f0p", name: "Jeff Bezoz" },
  { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
  { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
  { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
  { src: "https://links.papareact.com/6gg", name: "The Queen" },
  { src: "https://links.papareact.com/r57", name: "James Bond" },
];

function Widgets() {
  return (
    <Container>
      <ContactInfo>
        <ContactHeading>Contacts</ContactHeading>
        <ContactIcons>
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </ContactIcons>
      </ContactInfo>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </Container>
  );
}

export default Widgets;

const Container = styled.div`
  ${tw`
    hidden
    lg:flex
    flex-col
    w-60
    p-2
    mt-5
  `}
`;

const ContactInfo = styled.div`
  ${tw`
    flex
    justify-between
    items-center
    text-gray-500
    mb-5
  `}
`;

const ContactHeading = styled.h2`
  ${tw`
    text-xl
  `}
`;

const ContactIcons = styled.div`
  ${tw`
    flex
    space-x-2
  `}
`;
