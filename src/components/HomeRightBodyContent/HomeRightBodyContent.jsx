import HomeLogo from "../../assets/HomeLogo.png"
import * as Styled from "./StyledComponents";
import { cardsConfig } from "../../utils/QuickChatConfig.js"
import SendMessage from "../SendMessage/SendMessage"
import { useState } from 'react'
import QuestionAndReplyChatCards from "../QuestionAndReplyChatCards/QuestionAndReplyChatCards.jsx";
import { ThemeContext } from "../Home/Home.jsx";
import { useContext, useEffect, useRef } from "react"
const HomeRightBodyContent = ({ isMobile, askedMessagesWithResponses, onChangeMessage, updateRating, updateFeedback, onSaveMessages }) => {
  const [message, setMessage] = useState();
  const theme = useContext(ThemeContext);
  const messagesEndRef = useRef(null);



  const renderHomeTitleWithLogo = () => <Styled.HomeTitleWithLogoContainer isLightTheme={theme}>
    <Styled.HomeHeadingText>How Can I Help You Today?</Styled.HomeHeadingText>
    <Styled.HomeIcon
      src={HomeLogo}
      alt="menu-icon"
      srcSet=""
    />
  </Styled.HomeTitleWithLogoContainer>

  const renderCard = (title, description, index) => <Styled.Card key={index}>
    <Styled.CardTitle>
      {title}
    </Styled.CardTitle>

    <Styled.CardDescription>
      {description}
    </Styled.CardDescription>

  </Styled.Card>

  const renderQuickChatFeatures = () => <Styled.QuickChatFeaturesContainer>
    {
      cardsConfig.map((config, index) => renderCard(config.title, config.description, index))
    }

  </Styled.QuickChatFeaturesContainer>


  const onClickAsk = () => {
    onChangeMessage(message)

  }

  const onClickSave = () => {
    onSaveMessages()
  }

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {

    scrollToBottom()
  }, [askedMessagesWithResponses])

  const renderListOfAskedMessagesWithResponses = () =>
    <Styled.ChatMessages id="asked-messages">
      {askedMessagesWithResponses.map(askedMessageWithResponse => <QuestionAndReplyChatCards askedMessageWithResponse={askedMessageWithResponse} updateRating={updateRating} updateFeedback={updateFeedback} />)
      }
      <div ref={messagesEndRef} />
    </Styled.ChatMessages>

  const hasMessages = askedMessagesWithResponses.length

  return (
    <Styled.ChatBodyContainer isLightTheme={theme} >
      {isMobile ? null : <Styled.BotAIText>Bot AI</Styled.BotAIText>}

      {hasMessages ? null : renderHomeTitleWithLogo()}
      {hasMessages ? null : renderQuickChatFeatures()}

      {renderListOfAskedMessagesWithResponses()}
      <SendMessage message={message} setMessage={setMessage} onClickAsk={onClickAsk} onClickSave={onClickSave} />
    </Styled.ChatBodyContainer>
  );
};
export default HomeRightBodyContent;
