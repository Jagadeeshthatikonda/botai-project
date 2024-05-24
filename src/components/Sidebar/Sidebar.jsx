
import SidebarLogo from "../../assets/Sidebarlogo.png"
import ChatEditLogo from "../../assets/ChatEditLogo.png"
import * as Styled from './StyledComponents'
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Home/Home.jsx";
import { useContext } from "react"


const Sidebar = ({ hasSavedMessages }) => {
  const navigate = useNavigate();
  const isLightTheme = useContext(ThemeContext);

  return <Styled.LargeSizeSidebarContainer>
    <Styled.SidebarContainer isLightTheme={isLightTheme}>
      <Styled.SidebarMenuItem onClick={() => {
        navigate("/");
      }}>
        <Styled.ImageContainer src={SidebarLogo} srcSet="" alt="sidebar logo" width={32} height={32} />

        <Styled.MenuItemText>
          New Chat
        </Styled.MenuItemText>

        <Styled.ChatEditLogo src={ChatEditLogo} srcSet="" alt="Chat Edit logo" />


      </Styled.SidebarMenuItem>
      {hasSavedMessages ? <Styled.PastConversationContainer onClick={() => {
        navigate("/history");
      }}>
        Past Conversations
      </Styled.PastConversationContainer> : null}
    </Styled.SidebarContainer>
  </Styled.LargeSizeSidebarContainer>

}

export default Sidebar