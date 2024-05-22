import styled from "styled-components";
import tw from "twin.macro";

export const MessagesListContainer = styled.div`
  ${tw`flex  flex-col justify-start gap-y-4 w-full p-4`}
`;

export const TodayChatText = styled.p`
${tw`font-normal text-sm	leading-[22px] text-[#000000]`}
`

export const ConversationHistoryText = styled.p`
${tw`font-normal text-lg	leading-[22px] text-[#000000] text-center`}
`

export const RatingFilterContainer = styled.div`
  margin-bottom: 10px;
`;

export const RatingFilterLabel = styled.label`
  margin-right: 10px;
`;

export const RatingFilterSelect = styled.select`
  padding: 5px;
  font-size: 16px;
`;

export const NoMessagesText = styled.p`
  font-size: 18px;
  color: grey;
  text-align: center;
  margin-top: 20px;
`;