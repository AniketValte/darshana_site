import { useNavigate } from "@solidjs/router";
import { AiOutlineClose } from "solid-icons/ai";
import { FaSolidAngleDown, FaSolidBars } from "solid-icons/fa";
import { createEffect, createSignal } from "solid-js";
import { linkToPage } from "widgets/link-to-page";
import kunjalogo from "assets/images/home/kunjalogo.png";
import { showMobileMenu, showAboutSubMenu, showOthersSubMenu } from "AppStore";
import { toggleMobileMenu, toggleMobileSubMenu } from "AppActions";

const Header7 = () => {
  const navigate = useNavigate();


  return (
    <>
    <header class="justify-around text-white">
      <div class="relative lg:p-4 z-10 lg:bg-white">
        

        <div class="w-full hidden lg:flex justify-evenly navbar-center items-center">

        <div class="text-black text-2xl font-bold">
          Darshana Sengupta
        </div>

        <ul class="hidden md:flex space-x-8 text-sm text-white font-bold ubuntuFont cursor-pointer">
              <li>
                <div onClick={() => linkToPage(navigate, "/")} class=" text-gray-700 hover:text-black">HOME</div>
              </li>
              <li class="flex relative group">
                <div class=" text-gray-700 hover:text-black flex justify-center items-center space-x-1">
                  <p>ABOUT</p>
                  
                </div>
               
              </li>

              <li>
                <div onClick={() => linkToPage(navigate, "/events")} class="text-gray-700 hover:text-black"
                >EVENTS</div>
              </li>
              <li>
                <div onClick={() => linkToPage(navigate, "/datri")} class="text-gray-700 hover:text-black">DATRI</div>
              </li>
               
              <li>
                <div onClick={() => linkToPage(navigate, "/portfolio")} class="text-gray-700 hover:text-black">PORTFOLIO</div>
              </li>

              <li>
                <div onClick={() => linkToPage(navigate, "/contact")} class="text-gray-700 hover:text-black">CONTACT</div>
              </li>
            </ul>
        </div>        

        {/* <!-- Mobile menu --> */}
        {showMobileMenu() ? (
          <div class="lg:hidden flex justify-center w-full bg-white border-t-2 border-gray-100 z-50">
            <div class={`absolute w-full ${showMobileMenu() ? `show-mobile-menu` : `hide-mobile-menu`}`}>

            



              <ul class="bg-white text-xl pt-6 flex flex-col space-y-4 text-gray-800 shadow-lg leading-9 font-bold h-screen">
                <li class="border-b-2 border-white hover:text-black pl-4">
                  <div onClick={() => linkToPage(navigate, "/")} class="block pl-7">
                    Home
                  </div>
                </li>
                <li class="border-b-2 border-white hover:text-black">
                  <div class="flex items-center space-x-1 pl-11" onClick={()=>toggleMobileSubMenu("about")}>
                    <p>About</p>
                    <FaSolidAngleDown class="fill-black" />
                  </div>

              
                </li>
                <li class="border-b-2 border-white hover:text-black pl-4">
                  <div onClick={() => linkToPage(navigate, "/events")} class="block pl-7">
                   EVENTS
                  </div>
                </li>

                <li class="border-b-2 border-white hover:text-black pl-4">
                  <div onClick={() => linkToPage(navigate, "/datri")} class="block pl-7">
                   DATRI
                  </div>
                </li>

                <li class="border-b-2 border-white hover:text-black pl-4">
                  <div onClick={() => linkToPage(navigate, "/portfolio")} class="block pl-7">
                    PORTFOLIO
                  </div>
                </li>


                <li class="border-b-2 border-white hover:text-black pl-4">
                  <div onClick={() => linkToPage(navigate, "/contact")} class="block pl-7">
                    Contact
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </header>
    </>
    
  );
};

export default Header7;