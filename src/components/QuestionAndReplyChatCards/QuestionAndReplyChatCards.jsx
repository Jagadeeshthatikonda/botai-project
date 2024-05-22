import * as Styled from "./StyledComponents";
import ChatMessageCard from "../ChatMessageCard/ChatMessageCard";
const QuestionAndReplyChatCards = ({ askedMessageWithResponse, updateRating, updateFeedback }) => (
  <Styled.MessagesListContainer>
    {["question", "reply"].map((value) => {
      return (
        <ChatMessageCard
          askedMessageWithResponse={askedMessageWithResponse}
          typeOfCard={value}
          updateRating={updateRating}
          updateFeedback={updateFeedback}
        />
      );
    })}
  </Styled.MessagesListContainer>
);

export default QuestionAndReplyChatCards;
