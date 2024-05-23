import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

export const MessageCardContainer = styled.div`
  ${tw`flex  justify-start items-start py-3 px-6 bg-[#D7C7F421] rounded-[20px]`}
box-shadow: -4px 4px 15px 0px #0000001A;
  ${props => props.isLightTheme ? tw`border-none` : tw`border border-solid border-white `}

`;


export const UserImage = styled.img`
  ${tw`w-[65px] h-[69px] `}
`;


export const MessageInfo = styled.div`
  ${tw`flex flex-col  justify-start ml-5`}
`;

export const UserNameText = styled.p`
  ${tw`font-bold	text-xs	leading-[18px] `}
  font-family:Ubuntu;
  ${props => props.isLightTheme ? tw`` : tw`text-white `}

`;

export const ChatMessage = styled.p`
  ${tw`font-normal	text-xs	leading-[21px] mt-2 text-[#000000] `}
  ${props => props.isLightTheme ? tw`` : tw`text-white `}

  font-family:Open Sans
`;


export const ChatDateContainer = styled.div`
  ${tw`flex justify-start items-center  mt-2 `}
 
`;

export const ChatDate = styled.p`
  ${tw`font-normal	text-xs	leading-[21px] text-[#0000009E] `}
  ${props => props.isLightTheme ? tw`` : tw`text-white `}

  font-family:Open Sans
`;

export const EmotionImage = styled.img`
  ${tw`w-4 h-4 cursor-pointer ml-2 first:ml-6 `}
  
`;


export const FeedbackWrapper = styled.p`
${tw`mt-5`}
`

export const FeedbackText = styled.span`
${tw`text-xs  font-normal leading-[21px]`}
  ${props => props.isLightTheme ? tw`` : tw`text-white `}


font-family:Open Sans
`

export const FeedbackHeading = styled.span`
${tw` font-bold leading-[21px]`}
  ${props => props.isLightTheme ? tw`` : tw`text-white `}


font-family:Open Sans
`

export const likeOrDislikeStyles = `
${tw`w-4 h-4 cursor-pointer ml-2 first:ml-6 `}
`