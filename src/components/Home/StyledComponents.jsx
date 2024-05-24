import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

// Keyframes for the slide-in animation
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Keyframes for the slide-out animation
const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const HomePageContainer = styled.div`
${tw`w-full h-full flex justify-start items-center`}
background: linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%);
 @media (max-width: 800px) {
   ${tw`flex flex-col`}
  }
`
export const BodyContainer = styled.div`
${tw`grow overflow-x-hidden overflow-y-auto w-full  h-full relative flex flex-col`}
`

export const SidebarContainer = styled.div`
${tw`absolute h-full w-[208px]`}
 transform: translateX(-100%);
animation: ${({ openSideBar }) => openSideBar ? slideIn : slideOut} 0.3s forwards;


`

export const ToggleButton = styled.button`
  ${tw`py-2 px-4 mt-4 rounded-lg absolute right-0 top-0`}
  background-color: ${({ isLightTheme }) => isLightTheme.primary};
  color: #fff;
  border: none;
  cursor: pointer;

`;