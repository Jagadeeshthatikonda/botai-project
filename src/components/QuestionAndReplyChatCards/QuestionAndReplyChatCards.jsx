import { useState } from "react"

import * as Styled from './StyledComponents'
import MyProfile from "../../assets/MyProfile.png"
import HomeLogo from "../../assets/MyProfile.png"
import Like from "../../assets/like.png"
import Dislike from "../../assets/dislike.png"
import ChatMessageCard from "../ChatMessageCard/ChatMessageCard"
const QuestionAndReplyChatCards = ({ askedMessageWithResponse }) =>






  <Styled.MessagesListContainer>
    {
      ["question", "reply"].map(value => {

        return <ChatMessageCard askedMessageWithResponse={askedMessageWithResponse} typeOfCard={value} />
      })

    }


  </Styled.MessagesListContainer>




export default QuestionAndReplyChatCards