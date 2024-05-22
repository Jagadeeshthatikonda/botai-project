import React, { useState, useEffect } from 'react';
import * as Styled from "./StyledComponents";
import Sidebar from "../Sidebar/Sidebar";
import NavbarToggle from "../NavbarToggle/NavbarToggle";
import HomeRightBodyContent from '../HomeRightBodyContent/HomeRightBodyContent'
import { v4 as uuidV4 } from "uuid"
import { getFormattedTime } from "../../utils/DateUtils"
const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSideBar, setOpenSidebar] = useState(false);
  const [askedMessagesWithResponses, setAskedMessagesWithResponses] = useState([]);

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

  const checkIsMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileDevice = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent);
    const isSmallScreen = window.matchMedia("only screen and (max-width: 800px)").matches;

    return isMobileDevice || isSmallScreen;
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


  return (
    <Styled.HomePageContainer>
      {isMobile ? <NavbarToggle openSidebar={openSideBar} setOpenSidebar={setOpenSidebar} /> : <Sidebar />}
      <Styled.BodyContainer>
        {openSideBar && isMobile ? <Styled.SidebarContainer openSideBar={openSideBar}>
          <Sidebar />
        </Styled.SidebarContainer> : null}
        <HomeRightBodyContent isMobile={isMobile} askedMessagesWithResponses={askedMessagesWithResponses} onChangeMessage={onChangeMessage} updateRating={updateRating} updateFeedback={updateFeedback} />
      </Styled.BodyContainer>
    </Styled.HomePageContainer>
  );
};

export default Home;
