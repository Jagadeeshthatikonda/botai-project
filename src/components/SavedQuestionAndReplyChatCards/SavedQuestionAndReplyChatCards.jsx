import SavedChartMessageCard from "../SavedChartMessageCard/SavedChartMessageCard";

import * as Styled from "./StyledComponents";
import { ThemeContext } from "../Home/Home.jsx";
import { useContext } from "react"

const SavedQuestionAndReplyChatCards = ({ savedMessage }) => {

  const isLightTheme = useContext(ThemeContext);

  return <Styled.MessagesListContainer isLightTheme={isLightTheme}>
    {["question", "reply"].map((value) => {
      return (
        <SavedChartMessageCard
          savedMessage={savedMessage}
          typeOfCard={value}

        />
      );
    })}
  </Styled.MessagesListContainer>
}

export default SavedQuestionAndReplyChatCards;
