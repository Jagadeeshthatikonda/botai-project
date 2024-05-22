import * as Styled from "./StyledComponents";
import ChatMessageCard from "../ChatMessageCard/ChatMessageCard";
const QuestionAndReplyChatCards = ({ askedMessageWithResponse }) => (
  <Styled.MessagesListContainer>
    {["question", "reply"].map((value) => {
      return (
        <ChatMessageCard
          askedMessageWithResponse={askedMessageWithResponse}
          typeOfCard={value}
        />
      );
    })}
  </Styled.MessagesListContainer>
);

export default QuestionAndReplyChatCards;
