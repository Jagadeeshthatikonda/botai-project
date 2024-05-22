import * as Styled from "./StyledComponents";
import ChatMessageCard from "../ChatMessageCard/ChatMessageCard";
const QuestionAndReplyChatCards = ({ askedMessageWithResponse, updateRating }) => (
  <Styled.MessagesListContainer>
    {["question", "reply"].map((value) => {
      return (
        <ChatMessageCard
          askedMessageWithResponse={askedMessageWithResponse}
          typeOfCard={value}
          updateRating={updateRating}
        />
      );
    })}
  </Styled.MessagesListContainer>
);

export default QuestionAndReplyChatCards;
