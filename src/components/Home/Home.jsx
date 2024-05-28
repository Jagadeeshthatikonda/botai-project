import React, { useState, useEffect, createContext } from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import * as Styled from "./StyledComponents";
import Sidebar from "../Sidebar/Sidebar";
import NavbarToggle from "../NavbarToggle/NavbarToggle";
import HomeRightBodyContent from '../HomeRightBodyContent/HomeRightBodyContent';
import { v4 as uuidV4 } from "uuid";
import { getFormattedTime } from "../../utils/DateUtils";
import { checkIsMobile } from "../../utils/DeviceUtils";
import PastConversationHistory from '../PastConversationHistory/PastConversationHistory';
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
export const ThemeContext = createContext();

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSideBar, setOpenSidebar] = useState(false);
  const [askedMessagesWithResponses, setAskedMessagesWithResponses] = useState([]);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [chatSavedStatus, setChatSavedStatus] = useState("");
  const [savedMessages, setSavedMessages] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggleThemeChange = () => {
    setIsLightTheme(prev => !prev);
  };

  const onSaveMessages = () => {
    const currentConversation = {
      id: currentConversationId || uuidV4(),
      messages: askedMessagesWithResponses,
      timestamp: getFormattedTime(),
    };

    const alreadySavedIndex = savedMessages.findIndex(convo => convo.id === currentConversation.id);

    if (alreadySavedIndex === -1) {
      const newSavedMessages = [...savedMessages, currentConversation];
      setSavedMessages(newSavedMessages);
      localStorage.setItem('savedMessages', JSON.stringify(newSavedMessages));
      setCurrentConversationId(currentConversation.id);
      setChatSavedStatus("NEW_CHAT");
    } else {
      const updatedSavedMessages = savedMessages.map((convo, index) =>
        index === alreadySavedIndex ? currentConversation : convo
      );
      setSavedMessages(updatedSavedMessages);
      localStorage.setItem('savedMessages', JSON.stringify(updatedSavedMessages));
      setChatSavedStatus("UPDATED_CHAT");
    }
  };

  const onChangeMessage = (message) => {
    const time = getFormattedTime();
    const userMessageType = {
      id: uuidV4(),
      message,
      time,
      response: "Some Answer given by AI :)"
    };
    setAskedMessagesWithResponses(prev => [...prev, userMessageType]);
  };

  const updateRating = (id, rating) => {
    setAskedMessagesWithResponses(prevMessages =>
      prevMessages.map(message =>
        message.id === id ? { ...message, rating } : message
      )
    );
  };

  const updateFeedback = (id, feedback) => {
    setAskedMessagesWithResponses(prevMessages =>
      prevMessages.map(message =>
        message.id === id ? { ...message, feedback } : message
      )
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('savedMessages'));
    if (storedMessages) {
      setSavedMessages(storedMessages);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setAskedMessagesWithResponses([]);
      setCurrentConversationId(null);
    }
  }, [location.pathname]);

  const handleRoutes = () => (
    <Routes>
      <Route
        path="/"
        element={
          <HomeRightBodyContent
            isMobile={isMobile}
            setChatSavedStatus={setChatSavedStatus}
            chatSavedStatus={chatSavedStatus}
            askedMessagesWithResponses={askedMessagesWithResponses}
            onChangeMessage={onChangeMessage}
            updateRating={updateRating}
            updateFeedback={updateFeedback}
            onSaveMessages={onSaveMessages}
          />
        }
      />
      <Route
        path="/history/:id"
        element={<PastConversationHistory savedMessages={savedMessages} />}
      />
    </Routes>
  );

  const onClickOutsideCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const startNewChat = () => {
    setAskedMessagesWithResponses([]);
    setCurrentConversationId(null);
    setChatSavedStatus("");
    navigate("/");
  };

  return (
    <ThemeContext.Provider value={isLightTheme}>
      <Styled.HomePageContainer>
        {isMobile ? <ToggleSwitch id="checked" checked={isLightTheme} onChange={handleToggleThemeChange} /> : null}
        {isMobile ? <NavbarToggle openSidebar={openSideBar} setOpenSidebar={setOpenSidebar} /> : <Sidebar savedMessages={savedMessages} startNewChat={startNewChat} />}
        <Styled.BodyContainer onClick={onClickOutsideCloseSidebar}>
          {isMobile ? null : <ToggleSwitch id="checked" checked={isLightTheme} onChange={handleToggleThemeChange} />}
          {openSideBar && isMobile ? (
            <Styled.SidebarContainer openSideBar={openSideBar}>
              <Sidebar savedMessages={savedMessages} startNewChat={startNewChat} />
            </Styled.SidebarContainer>
          ) : null}
          {handleRoutes()}
        </Styled.BodyContainer>
      </Styled.HomePageContainer>
    </ThemeContext.Provider>
  );
};

export default Home;
