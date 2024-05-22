import { useState } from "react"

import * as Styled from './StyledComponents'
import MyProfile from "../../assets/MyProfile.png"
import HomeLogo from "../../assets/HomeLogo.png"
import Like from "../../assets/like.png"
import Dislike from "../../assets/dislike.png"
const ChatMessageCard = ({ askedMessageWithResponse, typeOfCard }) => {

  const { time, message, response } = askedMessageWithResponse



  const [isHovered, setIsHovered] = useState(false)
  const isUserAI = typeOfCard === 'reply'
  const userImage = isUserAI ? HomeLogo : MyProfile
  const chatMessage = isUserAI ? response : message

  const userName = isUserAI ? "Soul AI" : "You"

  const renderLikeDislike = () => <>
    <Styled.EmotionImage src={Like} alt="like" srcSet="" />
    <Styled.EmotionImage src={Dislike} alt="dislike" srcSet="" />
  </>

  const renderDate = () => <Styled.ChatDateContainer>
    <Styled.ChatDate>
      {time}
    </Styled.ChatDate>
    {isUserAI && isHovered ? renderLikeDislike() : null}
  </Styled.ChatDateContainer>

  const handleMouseEnter = () => {
    if (!isUserAI) return
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (!isUserAI) return

    setIsHovered(false)
  }

  return <Styled.MessageCardContainer onMouseEnter={(e) => handleMouseEnter()} onMouseLeave={(e) => handleMouseLeave()}>
    <Styled.UserImage src={userImage} alt={"my profile"} srcSet={""} />
    <Styled.MessageInfo>
      <Styled.UserNameText>
        {userName}
      </Styled.UserNameText>
      <Styled.ChatMessage>
        {chatMessage}
      </Styled.ChatMessage>
      {renderDate()}
    </Styled.MessageInfo>

  </Styled.MessageCardContainer>



}
export default ChatMessageCard