import { useState } from "react";
import * as Styled from "./StyledComponents";
import SavedQuestionAndReplyChatCards from "../SavedQuestionAndReplyChatCards/SavedQuestionAndReplyChatCards";

const PastConversationHistory = ({ savedMessages }) => {
  const [selectedRating, setSelectedRating] = useState('All');

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const filterMessagesByRating = (messages, rating) => {
    if (rating === 'All') return messages;
    return messages.filter(message => message.rating === parseInt(rating, 10));
  };

  const filteredMessages = filterMessagesByRating(savedMessages, selectedRating);

  return (
    <Styled.MessagesListContainer>
      <Styled.ConversationHistoryText>
        Conversation History
      </Styled.ConversationHistoryText>
      <Styled.TodayChatText>
        Today’s Chats
      </Styled.TodayChatText>

      <Styled.RatingFilterContainer>
        <Styled.RatingFilterLabel htmlFor="ratingFilter">Filter by Rating:</Styled.RatingFilterLabel>
        <Styled.RatingFilterSelect id="ratingFilter" value={selectedRating} onChange={handleRatingChange}>
          <option value="All">All</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </Styled.RatingFilterSelect>
      </Styled.RatingFilterContainer>

      {filteredMessages.length > 0 ? (
        filteredMessages.map(savedMessage => (
          <SavedQuestionAndReplyChatCards key={savedMessage.id} savedMessage={savedMessage} />
        ))
      ) : (
        <Styled.NoMessagesText>No chat messages available</Styled.NoMessagesText>
      )}
    </Styled.MessagesListContainer>
  );
};

export default PastConversationHistory;
