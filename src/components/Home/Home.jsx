import React, { useState, useEffect } from 'react';
import * as Styled from "./StyledComponents";
import Sidebar from "../Sidebar/Sidebar";
import NavbarToggle from "../NavbarToggle/NavbarToggle";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSideBar, setOpenSidebar] = useState(false);

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
      </Styled.BodyContainer>
    </Styled.HomePageContainer>
  );
};

export default Home;
