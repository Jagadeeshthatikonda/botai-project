import React, { useState, useEffect, createContext } from 'react';
import { Route, Routes } from "react-router-dom";

import * as Styled from "./StyledComponents";
import Sidebar from "../Sidebar/Sidebar";
import NavbarToggle from "../NavbarToggle/NavbarToggle";
import HomeRightBodyContent from '../HomeRightBodyContent/HomeRightBodyContent'
import { v4 as uuidV4 } from "uuid"
import { getFormattedTime } from "../../utils/DateUtils"
import { checkIsMobile } from "../../utils/DeviceUtils"
import PastConversationHistory from '../PastConversationHistory/PastConversationHistory';
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"

export const ThemeContext = createContext()


const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSideBar, setOpenSidebar] = useState(false);
  const [askedMessagesWithResponses, setAskedMessagesWithResponses] = useState([]);
  const [savedMessages, setSavedMessages] = useState([]);
  const [isLightTheme, setIsLightTheme] = useState(true);

  const handleToggleThemeChange = () => {
    setIsLightTheme(!isLightTheme);
  };




  const onSaveMessages = () => {
    setSavedMessages(askedMessagesWithResponses)
  }

  const onChangeMessage = (message) => {

    const time = getFormattedTime()
    const userMessageType = {
      id: uuidV4(),
      message,
      time,
      response: "Some Answer given by AI :)"
    }



    setAskedMessagesWithResponses(prev => [...prev, userMessageType])

  }

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


  const handleRoutes = () =>
    <Routes>
      <Route
        path="/"
        element={
          <HomeRightBodyContent isMobile={isMobile} askedMessagesWithResponses={askedMessagesWithResponses} onChangeMessage={onChangeMessage} updateRating={updateRating} updateFeedback={updateFeedback} onSaveMessages={onSaveMessages} />

        }
      />
      <Route
        path="/history"
        element={
          <PastConversationHistory savedMessages={savedMessages} />
        }
      />

    </Routes>

  return (
    <ThemeContext.Provider value={isLightTheme}>
      <Styled.HomePageContainer>
        {isMobile ? <NavbarToggle openSidebar={openSideBar} setOpenSidebar={setOpenSidebar} /> : <Sidebar hasSavedMessages={savedMessages.length > 0} />}
        <Styled.BodyContainer>
          <ToggleSwitch id="toggle" checked={isLightTheme} onChange={handleToggleThemeChange} />

          {openSideBar && isMobile ? <Styled.SidebarContainer openSideBar={openSideBar}>
            <Sidebar hasSavedMessages={savedMessages.length > 0} />
          </Styled.SidebarContainer> : null}
          {handleRoutes()}
        </Styled.BodyContainer>
      </Styled.HomePageContainer>
    </ThemeContext.Provider>
  );
};

export default Home;

