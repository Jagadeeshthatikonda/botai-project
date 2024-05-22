export const checkIsMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isMobileDevice = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent);
  const isSmallScreen = window.matchMedia("only screen and (max-width: 800px)").matches;

  return isMobileDevice || isSmallScreen;
};