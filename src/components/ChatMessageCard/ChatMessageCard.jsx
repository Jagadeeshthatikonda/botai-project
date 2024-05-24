import { useState } from "react";
import * as Styled from "./StyledComponents";
import MyProfile from "../../assets/MyProfile.png";
import HomeLogo from "../../assets/HomeLogo.png";
import Like from "../../assets/like.png";
import Dislike from "../../assets/dislike.png";
import StarRating from "../StarRating/StarRating";
import ProvideFeedbackModal from "../FeedbackForm/FeedbackForm";
import { ThemeContext } from "../Home/Home.jsx";
import { useContext } from "react"
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import "./styles.css"
const ChatMessageCard = ({ askedMessageWithResponse, typeOfCard, updateRating, updateFeedback }) => {
  const { time, message, response, rating, id, feedback } = askedMessageWithResponse;
  const [isHovered, setIsHovered] = useState(false);
  const [showStarRating, setShowStarRating] = useState(rating ? true : false);
  const [isOpenFeedbackForm, setIsOpenFeedbackForm] = useState(false);
  const isUserAI = typeOfCard === "reply";
  const userImage = isUserAI ? HomeLogo : MyProfile;
  const chatMessage = isUserAI ? response : message;
  const userName = isUserAI ? "Soul AI" : "You";
  const isLightTheme = useContext(ThemeContext);

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
      {!rating ? isLightTheme ? <Styled.EmotionImage src={Like} alt="like" onClick={handleLikeClick} /> : <SlLike color={"white"} onClick={handleLikeClick} className={"icon-comment"} />
        : null}
      {isLightTheme ? <Styled.EmotionImage src={Dislike} alt="dislike" onClick={handleDisLikeClick} /> : <SlDislike color={"white"} onClick={handleDisLikeClick} className={'icon-comment'} />}

    </>
  );

  const renderDate = () => (
    <Styled.ChatDateContainer>
      <Styled.ChatDate isLightTheme={isLightTheme}>{time}</Styled.ChatDate>
      {isUserAI && isHovered && renderLikeDislike()}
    </Styled.ChatDateContainer>
  );

  const renderStarRating = () => (
    isUserAI && showStarRating && <StarRating onChangeRating={onChangeRating} ratingValue={rating} />
  );

  const renderFeedback = () => (
    isUserAI && feedback &&
    <Styled.FeedbackWrapper>
      <Styled.FeedbackHeading isLightTheme={isLightTheme}>Feedback: </Styled.FeedbackHeading>
      <Styled.FeedbackText isLightTheme={isLightTheme}>{feedback}</Styled.FeedbackText>
    </Styled.FeedbackWrapper>
  );

  return (
    <Styled.MessageCardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isLightTheme={isLightTheme}
    >
      <Styled.UserImage src={userImage} alt={"my profile"} />
      <Styled.MessageInfo>
        <Styled.UserNameText isLightTheme={isLightTheme}>{userName}</Styled.UserNameText>
        <Styled.ChatMessage isLightTheme={isLightTheme}>{chatMessage}</Styled.ChatMessage>
        {renderDate()}
        {renderStarRating()}
        {renderFeedback()}
      </Styled.MessageInfo>
      <ProvideFeedbackModal feedbackText={feedback} isOpen={isOpenFeedbackForm} closeModal={closeFeedbackFormModal} submitFeedback={handleSubmitFeedback} />
    </Styled.MessageCardContainer>
  );
};

export default ChatMessageCard;
