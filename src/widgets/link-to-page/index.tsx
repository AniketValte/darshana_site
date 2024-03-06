import { setAnimatePage } from "AppStore";

const root: any = document.getElementById("root");

export const linkToPage = (navigate: any, route: any, params?: any) => {
  function scrollToTop() {
    root.scrollTo({ top: 0, behavior: "smooth" });
  }
  // let debounceScroll = debounce(scrollToTop, 500);
  // debounceScroll();

  if (params !== undefined && params !== null && "animate" in params) {
    setAnimatePage(params.animate);
  } else {
    setAnimatePage(true);
  }

  // if (params !== undefined && params !== null && "previousRoute" in params) {
  //   setPreviousRoute(params.previousRoute);
  // } else {
  //   setPreviousRoute(null);
  // }

  if (route == "back") {
    // if (params !== undefined && params !== null && "previousRoute" in params) {
    //   return navigate(params?.previousRoute);
    // } else {
    return navigate(-1, params?.replace ? { replace: true } : { replace: false });
    // }
  }

  if (params?.id) {
    return navigate(`${route}/${params.id}`, params?.replace ? { replace: true } : { replace: false });
  }
  if (params?.txnId) {
    return navigate(`${route}/${params.txnId}`, params?.replace ? { replace: true } : { replace: false });
  }
  // else {
  //   return navigate(route, params?.replace ? { replace: true } : { replace: false });
  // }
  if (params?.user) {
    return navigate(
      `${route}/${params.user}/${params.item}/${params.amount}`,
      params?.replace ? { replace: true } : { replace: false }
    );
  } else {
    return navigate(route, params?.replace ? { replace: true } : { replace: false });
  }
};
