import * as Styled from "./StyledComponents";
import MyProfile from "../../assets/MyProfile.png";
import HomeLogo from "../../assets/HomeLogo.png";
import StarRating from "../StarRating/StarRating";
import { ThemeContext } from "../Home/Home.jsx";
import { useContext } from "react"

const SavedChartMessageCard = ({ savedMessage, typeOfCard, updateRating, updateFeedback }) => {
  const { time, message, response, rating, feedback } = savedMessage;
  const isUserAI = typeOfCard === "reply";
  const userImage = isUserAI ? HomeLogo : MyProfile;
  const chatMessage = isUserAI ? response : message;
  const userName = isUserAI ? "Soul AI" : "You";
  const isLightTheme = useContext(ThemeContext);

  const renderDate = () => (
    <Styled.ChatDateContainer>
      <Styled.ChatDate isLightTheme={isLightTheme}>{time}</Styled.ChatDate>
    </Styled.ChatDateContainer>
  );

  const renderStarRating = () => (
    isUserAI && rating ? <StarRating isReadonly={true} ratingValue={rating} /> : null
  );

  const renderFeedback = () => (
    isUserAI && feedback &&
    <Styled.FeedbackWrapper>
      <Styled.FeedbackHeading isLightTheme={isLightTheme}>Feedback: </Styled.FeedbackHeading>
      <Styled.FeedbackText isLightTheme={isLightTheme}>{feedback}</Styled.FeedbackText>
    </Styled.FeedbackWrapper>
  );

  return (
    <Styled.MessageCardContainer isLightTheme={isLightTheme}>
      <Styled.UserImage src={userImage} alt={"my profile"} />
      <Styled.MessageInfo>
        <Styled.UserNameText isLightTheme={isLightTheme}>{userName}</Styled.UserNameText>
        <Styled.ChatMessage isLightTheme={isLightTheme}>{chatMessage}</Styled.ChatMessage>
        {renderDate()}
        {renderStarRating()}
        {renderFeedback()}
      </Styled.MessageInfo>
    </Styled.MessageCardContainer>
  );
};

export default SavedChartMessageCard;
