import styled from "styled-components";
import tw from "twin.macro";

export const MessagesListContainer = styled.div`
  ${tw`flex  flex-col justify-start   w-full h-full grow  py-1 overflow-y-hidden`}
  ${props => props.isLightTheme ? tw`` : tw`bg-black text-white`}


`;

export const SavedMessagesMessagesListContainer = styled.div`
  ${tw`flex  flex-col justify-start h-full overflow-y-auto gap-y-4 w-full grow p-4`}
  ${props => props.isLightTheme ? tw`` : tw`bg-black text-white`}

`;

export const TodayChatText = styled.p`
${tw`font-normal text-sm	leading-[22px] text-[#000000]`}
  ${props => props.isLightTheme ? tw`` : tw`text-white `}

`

export const ConversationHistoryText = styled.p`
${tw`font-normal text-lg	leading-[22px] text-[#000000] text-center`}
  ${props => props.isLightTheme ? tw`` : tw`text-white `}

`

export const RatingFilterContainer = styled.div`

${tw`mx-auto mt-1`}
  margin-bottom: 10px;
`;

export const RatingFilterLabel = styled.label`
  margin-right: 10px;
  ${props => props.isLightTheme ? tw`` : tw`text-white `}

`;

export const RatingFilterSelect = styled.select`
  padding: 5px;
  font-size: 16px;
  border-radius:10px;
  ${props => props.isLightTheme ? tw`` : tw`border border-white  text-black`}

`;

export const NoMessagesText = styled.p`
  font-size: 18px;
  color: grey;
  text-align: center;
  margin-top: 20px;
  ${props => props.isLightTheme ? tw`text-gray-900` : tw`text-white `}

`;