import * as Styled from "./StyledComponents";
import MyProfile from "../../assets/MyProfile.png";
import HomeLogo from "../../assets/HomeLogo.png";
import StarRating from "../StarRating/StarRating";

const SavedChartMessageCard = ({ savedMessage, typeOfCard, updateRating, updateFeedback }) => {
  const { time, message, response, rating, feedback } = savedMessage;
  const isUserAI = typeOfCard === "reply";
  const userImage = isUserAI ? HomeLogo : MyProfile;
  const chatMessage = isUserAI ? response : message;
  const userName = isUserAI ? "Soul AI" : "You";

  const renderDate = () => (
    <Styled.ChatDateContainer>
      <Styled.ChatDate>{time}</Styled.ChatDate>
    </Styled.ChatDateContainer>
  );

  const renderStarRating = () => (
    isUserAI && rating ? <StarRating isReadonly={true} ratingValue={rating} /> : null
  );

  const renderFeedback = () => (
    isUserAI && feedback &&
    <Styled.FeedbackWrapper>
      <Styled.FeedbackHeading>Feedback: </Styled.FeedbackHeading>
      <Styled.FeedbackText>{feedback}</Styled.FeedbackText>
    </Styled.FeedbackWrapper>
  );

  return (
    <Styled.MessageCardContainer>
      <Styled.UserImage src={userImage} alt={"my profile"} />
      <Styled.MessageInfo>
        <Styled.UserNameText>{userName}</Styled.UserNameText>
        <Styled.ChatMessage>{chatMessage}</Styled.ChatMessage>
        {renderDate()}
        {renderStarRating()}
        {renderFeedback()}
      </Styled.MessageInfo>
    </Styled.MessageCardContainer>
  );
};

export default SavedChartMessageCard;
