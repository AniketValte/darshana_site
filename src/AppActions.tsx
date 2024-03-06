import { setShowAboutSubMenu, setShowMobileMenu, setShowOthersSubMenu, showAboutSubMenu, showMobileMenu, showOthersSubMenu } from "AppStore";

export const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu());
  };

export const toggleMobileSubMenu = (menuItem:any) => {
    if(menuItem == "about"){
      setShowAboutSubMenu(!showAboutSubMenu());
    }else{
      setShowOthersSubMenu(!showOthersSubMenu());
    }
  };