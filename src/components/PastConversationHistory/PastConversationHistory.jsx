import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./StyledComponents";
import SavedQuestionAndReplyChatCards from "../SavedQuestionAndReplyChatCards/SavedQuestionAndReplyChatCards";
import { ThemeContext } from "../Home/Home.jsx";

const PastConversationHistory = ({ savedMessages }) => {
  const [selectedRating, setSelectedRating] = useState('All');
  const isLightTheme = useContext(ThemeContext);
  const { id } = useParams();

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const filterMessagesByRating = (messages, rating) => {
    if (rating === 'All') return messages;
    return messages.filter(message => message.rating === parseInt(rating, 10));
  };

  const conversation = savedMessages.find(convo => convo.id === id);
  const filteredMessages = conversation ? filterMessagesByRating(conversation.messages, selectedRating) : [];

  return (
    <Styled.MessagesListContainer isLightTheme={isLightTheme}>
      <Styled.ConversationHistoryText isLightTheme={isLightTheme}>
        Conversation History
      </Styled.ConversationHistoryText>

      <Styled.RatingFilterContainer isLightTheme={isLightTheme}>
        <Styled.RatingFilterLabel htmlFor="ratingFilter" isLightTheme={isLightTheme}>
          Filter by Rating:
        </Styled.RatingFilterLabel>
        <Styled.RatingFilterSelect id="ratingFilter" value={selectedRating} onChange={handleRatingChange}>
          <option value="All">All</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </Styled.RatingFilterSelect>
      </Styled.RatingFilterContainer>

      <Styled.TodayChatText isLightTheme={isLightTheme}>
        Today's Chats
      </Styled.TodayChatText>
      <Styled.SavedMessagesMessagesListContainer isLightTheme={isLightTheme}>
        {filteredMessages.length > 0 ? (
          filteredMessages.map(savedMessage => (
            <SavedQuestionAndReplyChatCards key={savedMessage.id} savedMessage={savedMessage} />
          ))
        ) : (
          <Styled.NoMessagesText isLightTheme={isLightTheme}>No chat messages available</Styled.NoMessagesText>
        )}
      </Styled.SavedMessagesMessagesListContainer>
    </Styled.MessagesListContainer>
  );
};

export default PastConversationHistory;
