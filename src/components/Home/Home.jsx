import React, { useState, useEffect } from 'react';
import * as Styled from "./StyledComponents";
import Sidebar from "../Sidebar/Sidebar";
import NavbarToggle from "../NavbarToggle/NavbarToggle";
import HomeRightBodyContent from '../HomeRightBodyContent/HomeRightBodyContent'
import { v4 as uuidV4 } from "uuid"
import { getFormattedTime } from "../../utils/DateUtils"
import { checkIsMobile } from "../../utils/DeviceUtils"
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
