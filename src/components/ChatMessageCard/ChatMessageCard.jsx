import { useState } from "react";
import * as Styled from "./StyledComponents";
import MyProfile from "../../assets/MyProfile.png";
import HomeLogo from "../../assets/HomeLogo.png";
import Like from "../../assets/like.png";
import Dislike from "../../assets/dislike.png";
import StarRating from "../StarRating/StarRating";
import ProvideFeedbackModal from "../FeedbackForm/FeedbackForm";

const ChatMessageCard = ({ askedMessageWithResponse, typeOfCard, updateRating, updateFeedback }) => {
  const { time, message, response, rating, id, feedback } = askedMessageWithResponse;
  const [isHovered, setIsHovered] = useState(false);
  const [showStarRating, setShowStarRating] = useState(false);
  const [isOpenFeedbackForm, setIsOpenFeedbackForm] = useState(false);
  const isUserAI = typeOfCard === "reply";
  const userImage = isUserAI ? HomeLogo : MyProfile;
  const chatMessage = isUserAI ? response : message;
  const userName = isUserAI ? "Soul AI" : "You";

  const handleLikeClick = () => {
    setShowStarRating(!showStarRating);
  };

  const handleDisLikeClick = () => {
    setIsOpenFeedbackForm(true);
  };

  const handleSubmitFeedback = (feedback) => {
    updateFeedback(id, feedback)
  };

  const closeFeedbackFormModal = () => {
    setIsOpenFeedbackForm(false)
  };

  const handleMouseEnter = () => {
    if (!isUserAI) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isUserAI) return;
    setIsHovered(false);
  };

  const onChangeRating = (rating) => {
    updateRating(id, rating)
  };

  const renderLikeDislike = () => (
    <>
      {!rating ? <Styled.EmotionImage src={Like} alt="like" onClick={handleLikeClick} /> : null}
      <Styled.EmotionImage src={Dislike} alt="dislike" onClick={handleDisLikeClick} />
    </>
  );

  const renderDate = () => (
    <Styled.ChatDateContainer>
      <Styled.ChatDate>{time}</Styled.ChatDate>
      {isUserAI && isHovered && renderLikeDislike()}
    </Styled.ChatDateContainer>
  );

  const renderStarRating = () => (
    isUserAI && showStarRating && <StarRating onChangeRating={onChangeRating} />
  );

  const renderFeedback = () => (
    isUserAI && feedback &&
    <Styled.FeedbackWrapper>
      <Styled.FeedbackHeading>Feedback: </Styled.FeedbackHeading>
      <Styled.FeedbackText>{feedback}</Styled.FeedbackText>
    </Styled.FeedbackWrapper>
  );

  return (
    <Styled.MessageCardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Styled.UserImage src={userImage} alt={"my profile"} />
      <Styled.MessageInfo>
        <Styled.UserNameText>{userName}</Styled.UserNameText>
        <Styled.ChatMessage>{chatMessage}</Styled.ChatMessage>
        {renderDate()}
        {renderStarRating()}
        {renderFeedback()}
      </Styled.MessageInfo>
      <ProvideFeedbackModal isOpen={isOpenFeedbackForm} closeModal={closeFeedbackFormModal} submitFeedback={handleSubmitFeedback} />
    </Styled.MessageCardContainer>
  );
};

export default ChatMessageCard;
