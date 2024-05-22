
import Menu from "../../assets/Menu.png"

import * as Styled from './StyledComponents'

const NavbarToggle = ({ setOpenSidebar, openSidebar }) => {

  const renderBotTextWithIcon = () => <Styled.BotTextWithIconContainer>
    <Styled.MenuIcon src={Menu} alt="menu-icon" openSidebar={openSidebar} onClick={() => { setOpenSidebar(prev => !prev) }} />
    <Styled.MenuIconText>Bot AI</Styled.MenuIconText>
  </Styled.BotTextWithIconContainer>

  return renderBotTextWithIcon()



}
export default NavbarToggle