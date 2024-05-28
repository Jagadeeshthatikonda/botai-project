import React from 'react';
import SidebarLogo from "../../assets/Sidebarlogo.png";
import ChatEditLogo from "../../assets/ChatEditLogo.png";
import * as Styled from './StyledComponents';
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Home/Home.jsx";
import { useContext } from "react";

const Sidebar = ({ savedMessages, startNewChat }) => {
  const navigate = useNavigate();
  const isLightTheme = useContext(ThemeContext);

  return (
    <Styled.LargeSizeSidebarContainer>
      <Styled.SidebarContainer isLightTheme={isLightTheme}>
        <Styled.SidebarMenuItem onClick={startNewChat}>
          <Styled.ImageContainer src={SidebarLogo} alt="sidebar logo" width={32} height={32} />
          <Styled.MenuItemText>New Chat</Styled.MenuItemText>
          <Styled.ChatEditLogo src={ChatEditLogo} alt="Chat Edit logo" />
        </Styled.SidebarMenuItem>
        {savedMessages.length > 0 && (
          <Styled.PastConversationsList>
            {savedMessages.map((conversation) => (
              <Styled.PastConversationContainer key={conversation.id} onClick={() => navigate(`/history/${conversation.id}`)}>
                {`Conversation on ${conversation.timestamp}`}
              </Styled.PastConversationContainer>
            ))}
          </Styled.PastConversationsList>
        )}
      </Styled.SidebarContainer>
    </Styled.LargeSizeSidebarContainer>
  );
};

export default Sidebar;
