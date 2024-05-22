import SavedChartMessageCard from "../SavedChartMessageCard/SavedChartMessageCard";

import * as Styled from "./StyledComponents";

const SavedQuestionAndReplyChatCards = ({ savedMessage }) => (
  <Styled.MessagesListContainer>
    {["question", "reply"].map((value) => {
      return (
        <SavedChartMessageCard
          savedMessage={savedMessage}
          typeOfCard={value}

        />
      );
    })}
  </Styled.MessagesListContainer>
);

export default SavedQuestionAndReplyChatCards;
