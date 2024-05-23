import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

export const MessagesListContainer = styled.div`
  ${tw`flex  flex-col justify-start gap-y-4 w-full rounded-[10px]  `}
  background: ${props => props.isLightTheme ? 'linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)' : ""}; 
  ${props => props.isLightTheme ? tw`` : tw`text-white bg-black border  border-solid border-white`}


`;

