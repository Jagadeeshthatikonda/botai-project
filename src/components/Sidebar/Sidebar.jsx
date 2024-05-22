
import SidebarLogo from "../../assets/Sidebarlogo.png"
import Menu from "../../assets/Menu.png"
import ChatEditLogo from "../../assets/ChatEditLogo.png"
import * as Styled from './StyledComponents'

const Sidebar = () =>

  <Styled.LargeSizeSidebarContainer>
    <Styled.SidebarContainer>
      <Styled.SidebarMenuItem>
        <Styled.ImageContainer src={SidebarLogo} srcSet="" alt="sidebar logo" width={32} height={32} />

        <Styled.MenuItemText>
          New Chat
        </Styled.MenuItemText>

        <Styled.ChatEditLogo src={ChatEditLogo} srcSet="" alt="Chat Edit logo" />


      </Styled.SidebarMenuItem>
      <Styled.PastConversationContainer>
        Past Conversations
      </Styled.PastConversationContainer>
    </Styled.SidebarContainer>
  </Styled.LargeSizeSidebarContainer>



export default Sidebar