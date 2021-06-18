import styled from "styled-components";
import tw from "twin.macro";

function StoryCard({ name, src, profile }) {
  return (
    <Container>
      <ProfileImg src={profile} loading="lazy" />
      <StoryImg src={src} loading="lazy" />
      <Name>{name}</Name>
    </Container>
  );
}

export default StoryCard;

const Container = styled.div`
  ${tw`
    relative
    h-14
    w-14
    md:h-20
    md:w-20
    lg:h-56
    lg:w-32
    cursor-pointer
    transition
    duration-200
    transform
    ease-in
    hover:scale-105
    hover:animate-pulse
  `}
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  ${tw`
    absolute
    opacity-0
    lg:opacity-100
    rounded-full
    z-50
    top-3
    left-2
    object-cover
  `}
`;

const StoryImg = styled.img`
  ${tw`
    object-cover
    filter
    brightness-75
    rounded-full
    lg:rounded-3xl
    w-full
    h-full
  `}
`;

const Name = styled.p`
  ${tw`
    absolute
    opacity-0
    lg:opacity-100
    bottom-4
    w-5/6
    text-white
    text-sm
    font-bold
    truncate
    ml-2
  `}
`;
