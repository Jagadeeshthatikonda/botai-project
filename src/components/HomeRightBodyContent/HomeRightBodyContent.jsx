import HomeLogo from "../../assets/HomeLogo.png"
import * as Styled from "./StyledComponents";

const HomeRightBodyContent = ({ isMobile }) => {

  const renderHomeTitleWithLogo = () => <Styled.HomeTitleWithLogoContainer>
    <Styled.HomeHeadingText>How Can I Help You Today?</Styled.HomeHeadingText>
    <Styled.HomeIcon
      src={HomeLogo}
      alt="menu-icon"
      srcSet=""
    />
  </Styled.HomeTitleWithLogoContainer>

  return (
    <Styled.ChatBodyContainer>
      {isMobile ? null : <Styled.BotAIText>Bot AI</Styled.BotAIText>}

      {renderHomeTitleWithLogo()}

    </Styled.ChatBodyContainer>
  );
};
export default HomeRightBodyContent;
