import { createStore } from "services/StoreService";

export const [isFirstOpen, setIsFirstOpen] = createStore("isFirstOpen", true, true) as any;
export const [user, setUser] = createStore("user", {}, true) as any;
export const [scroll, setScroll] = createStore("scroll", false, false) as any;
export const [animatePage, setAnimatePage] = createStore("animatePage", false, true) as any;
export const [showMobileMenu, setShowMobileMenu] = createStore("showMobileMenu", false, false) as any;
export const [showAboutSubMenu, setShowAboutSubMenu] = createStore("showAboutSubMenu", false, false) as any;
export const [showOthersSubMenu, setShowOthersSubMenu] = createStore("showOthersSubMenu", false, false) as any;