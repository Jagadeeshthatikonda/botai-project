import HomeLogo from "../../assets/HomeLogo.png"
import * as Styled from "./StyledComponents";
import { cardsConfig } from "../../utils/QuickChatConfig.js"
import SendMessage from "../SendMessage/SendMessage"
import { useState } from 'react'
import QuestionAndReplyChatCards from "../QuestionAndReplyChatCards/QuestionAndReplyChatCards.jsx";
const HomeRightBodyContent = ({ isMobile, askedMessagesWithResponses, onChangeMessage, updateRating, updateFeedback, onSaveMessages }) => {
  const [message, setMessage] = useState();


  const renderHomeTitleWithLogo = () => <Styled.HomeTitleWithLogoContainer>
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

  const renderListOfAskedMessagesWithResponses = () =>
    <Styled.ChatMessages>
      {askedMessagesWithResponses.map(askedMessageWithResponse => <QuestionAndReplyChatCards askedMessageWithResponse={askedMessageWithResponse} updateRating={updateRating} updateFeedback={updateFeedback} />)
      }  </Styled.ChatMessages>

  const hasMessages = askedMessagesWithResponses.length

  return (
    <Styled.ChatBodyContainer>
      {isMobile ? null : <Styled.BotAIText>Bot AI</Styled.BotAIText>}

      {hasMessages ? null : renderHomeTitleWithLogo()}
      {hasMessages ? null : renderQuickChatFeatures()}

      {renderListOfAskedMessagesWithResponses()}
      <SendMessage message={message} setMessage={setMessage} onClickAsk={onClickAsk} onClickSave={onClickSave} />
    </Styled.ChatBodyContainer>
  );
};
export default HomeRightBodyContent;
