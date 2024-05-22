import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

export const BotTextWithIconContainer = styled.div`
  ${tw`flex items-center justify-start w-full p-[14px]`}
`;

export const MenuIcon = styled.img`
  ${tw`w-5 h-5 cursor-pointer`};

  transition: transform 0.3s ease-in-out;

  ${({ openSidebar }) => openSidebar ? `
    transform: rotate(90deg);
  ` : `
    transform: rotate(0deg);
  `};
`;
export const MenuIconText = styled.p`
 ${tw`text-2xl	font-bold	leading-8	ml-4 text-[#9785BA] `}
`;
