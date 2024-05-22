import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

export const ChatBodyContainer = styled.div`
  ${tw`  flex flex-col justify-end  grow  w-full px-[14px]`}
`;


export const BotAIText = styled.p`
 ${tw`text-2xl	font-bold	leading-8	ml-4  text-[#9785BA] mb-auto`}
`;

export const HomeTitleWithLogoContainer = styled.div`
${tw`flex flex-col justify-center items-center`}
`
export const HomeIcon = styled.img`
  ${tw`w-[65px] h-[69px]`};

`;

export const HomeHeadingText = styled.p`
 ${tw`text-lg	font-medium	leading-8	ml-4 text-black `}
`



export const QuickChatFeaturesContainer = styled.div`
${tw`flex items-center flex-wrap gap-y-[14px] gap-x-[32px] mt-[100px]`}
@media (max-width: 800px) {
   ${tw`justify-center`}
  }

`

export const Card = styled.div`
${tw`flex flex-col grow min-w-[355px] min-h-[111px] bg-white px-4 pt-4 rounded-[5px]`}
box-shadow: 0px 4px 4px 0px #00000040;

@media (min-width: 1077px) {
   ${tw`w-[45%]`}
  }

`

export const CardTitle = styled.p`
${tw`text-sm	font-bold	leading-[22px]`}

@media (max-width: 430px) {
   ${tw`w-[144px]`}
  }
`

export const CardDescription = styled.p`
${tw`text-xs	font-normal		leading-[21px] mt-5 text-[#00000080]`}
font-family:Open Sans;

@media (max-width: 430px) {
   ${tw`w-[201px]`}
  }

`

export const ChatMessages = styled.div`

${tw`flex flex-col justify-start gap-y-4 my-4`}
`