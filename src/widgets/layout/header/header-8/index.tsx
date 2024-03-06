import {
  FaSolidBell,
  FaSolidPowerOff,
} from "solid-icons/fa";
import { defaultPadding } from "config/styles";
import { user, setScroll, scroll, setUser } from "AppStore";
import { useNavigate } from "@solidjs/router";

import { IoCloseCircleOutline } from "solid-icons/io";
import { createEffect, createSignal } from "solid-js";
import { FiMenu } from "solid-icons/fi";
import heroImg from "assets/images/hero.jpg";
import clickOutside from "widgets/outside-click";
import logo1 from "assets/images/logo.png"
import { OcCheckcircle2 } from 'solid-icons/oc'


clickOutside;

const Header8 = ({
  showNotificationIcon = false,
  webMenuPosition = "right",
  showMenu = true,
  showAvatar = false,
  Logout = false,
  handleSmoothScroll = () => { },
}: any) => {

  const [transparentHeader, setTransparentHeader] = createSignal(true);
  const [toggleNav, setToggleNav] = createSignal(false);

  createEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY < 50) {
      setTransparentHeader(true);
      setScroll(false);
    } else {
      setTransparentHeader(false);
      setScroll(true);
    }
  };

  return (
    <>
      <header
        class={`w-full h-12 mt-20 fixed z-50 ${defaultPadding} bg-red-800 lg:flex shadow-md transition-colors duration-500 normalText`}>
        {/* <div class="w-full h-full flex items-center justify-between">
          <div class="w-full flex">
            <div
              class={`w-full flex ${webMenuPosition == "right" ? "justify-start lg:justify-center" : "justify-end lg:justify-between "
                }  items-center space-x-8  font-semibold  ${transparentHeader() ? "text-white" : "text-primary"}`}>
              <div
                class={`${toggleNav() ? "w-full lg:w-fit h-screen lg:h-full z-50 lg:z-0" : "-z-10 lg:z-0 delay-500 lg:delay-0"
                  } fixed lg:relative top-0 right-0 bg-[#000000aa] lg:bg-[#00000000]`}>
                <div
                  //@ts-ignore
                  use: clickOutside={() => setToggleNav(false)}
                  class={`${toggleNav() ? "right-0" : "-right-full lg:right-0"
                    } fixed lg:relative top-0 w-64 lg:w-fit h-screen lg:h-full flex flex-col lg:flex-row lg:items-center p-5 lg:p-0 space-y-5 lg:space-y-0 lg:space-x-5 bg-red-800 lg:bg-[#00000000] transition-all duration-500`}>
                  <div class="w-full h-8 flex lg:hidden justify-end mb-7">
                    <div
                      onClick={() => {
                        setToggleNav(false);
                      }}>
                      <IoCloseCircleOutline class="h-8 w-8 text-primary xl:hover:cursor-pointer xl:hover:bg-blue-200 active:bg-blue-200 duration-900 rounded-full" />
                    </div>
                  </div>
                  <a
                    onClick={() => handleSmoothScroll("home", 0)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-primary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Home
                  </a>
                  <a
                    onClick={() => handleSmoothScroll("about", 1)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 whitespace-nowrap ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-primary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    About Us
                  </a>
                  <a
                    onClick={() => handleSmoothScroll("services", 2)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-primary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Recognition
                  </a>
                  <a
                    onClick={() => handleSmoothScroll("pricing", 3)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-primary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Administration
                  </a>

                  <a
                    onClick={() => handleSmoothScroll("article", 4)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-primary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Admission
                  </a>

                  <a
                    onClick={() => handleSmoothScroll("contact", 5)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-primary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Courses
                  </a>
                  <a
                    onClick={() => handleSmoothScroll("contact", 5)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-primary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Library
                  </a>
                  <a
                    onClick={() => handleSmoothScroll("contact", 5)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 whitespace-nowrap ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-primary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Photo Gallery
                  </a>
                  <a
                    onClick={() => handleSmoothScroll("contact", 5)}
                    class={`block text-xl lg:text-base capitalize hover:cursor-pointer transition-all duration-300 whitespace-nowrap ${transparentHeader()
                      ? "text-primary lg:text-white hover:text-primary"
                      : "text-primary hover:text-secondary"
                      }${toggleNav() ? "active:border-l-4 active:border-primary active:pl-4 " : ""}`}>
                    Contact Us
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                {showNotificationIcon ? (
                  <div class="w-14 h-14 flex items-center justify-center">
                    <FaSolidBell class="w-9 h-9 fill-white" />
                  </div>
                ) : null}
                {showMenu ? (
                  <div
                    onClick={() => setToggleNav(!toggleNav())}
                    class="w-14 h-14 flex lg:hidden items-center justify-center rounded-md active:bg-[#ffffff77] active:scale-95 transition-transform duration-300">
                    <FiMenu class="w-9 h-9 fill-white" />
                  </div>
                ) : null}

                {showAvatar ? (
                  <div class="w-14 h-14 hidden lg:flex items-center justify-center overflow-hidden border rounded-full">
                    <img src={heroImg} class="w-full h-full object-cover" />
                  </div>
                ) : Logout ? (
                  <div class="w-14 h-14 hidden lg:flex items-center justify-center">
                    <FaSolidPowerOff class="w-9 h-9 fill-white" />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div> */}
        <p class="text-black">This</p>
      </header>
      {/* <div class="w-full lg:flex fixed z-50 hidden">
        <div class="relative flex w-full">

          <div class="w-full flex bg-black absolute items-center">

            <img src={logo1} alt="" class="w-20 h-20 ml-32" />
            <div class="">
              <p class="ChivoFont font-bold text-3xl text-gray-800">Nalbari Law College</p>
            </div>
          </div>
          <div class="w-full border-b-[5rem] border-l-[4rem] border-solid border-l-transparent border-b-primary absolute left-96 ml-80">
            <div class="hidden xl:flex absolute gap-20 my-4 lg:ml-16">

              <div class="flex gap-2">
                <OcCheckcircle2 class="text-secondary w-4 h-6" />
                <div>
                <p class="text-secondary font-bold">Address</p>
                <p class="text-xs text-white">Nalbari main road</p>
                </div>
              </div>
              <div class=" flex gap-2">
                <OcCheckcircle2 class="text-secondary w-4 h-6" />
                <div>
                <p class="text-secondary font-bold">Email</p>
                <p class="text-xs text-white">nalbarilawcollege@gmail.com</p>
                </div>
              </div>
              <div class=" flex gap-2">
                <OcCheckcircle2 class="text-secondary w-4 h-6" />
                <div>
                <p class="text-secondary font-bold">Call us</p>
                <p class="text-xs text-white">(+91) 987456123</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Header8;
