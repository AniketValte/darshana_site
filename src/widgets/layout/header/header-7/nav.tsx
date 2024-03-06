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
    <header class="justify-center text-white">
      <div class="relative lg:p-6 z-10 lg:bg-blue-500">
        <div class="w-full hidden lg:flex justify-center navbar-center items-center">
        <ul class="hidden md:flex space-x-8 text-sm text-white font-bold ubuntuFont cursor-pointer">
              <li>
                <div onClick={() => linkToPage(navigate, "/")} class="hover:text-black">HOME</div>
              </li>
              <li class="flex relative group">
                <div class="hover:text-black flex justify-center items-center space-x-1">
                  <p>ABOUT</p>
                  <FaSolidAngleDown class="fill-white" />
                </div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute text-gray-800 z-50 bg-white p-3 w-52 top-6 transform scale-0
                group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg space-y-1">
                  <li class="text-sm hover:text-black leading-8">
                    <div onClick={() => linkToPage(navigate, "/about-us")}>About Us</div>
                  </li>
                  <li class="text-sm hover:text-black leading-8">
                    <div onClick={() => linkToPage(navigate, "/amenities")}>Amenities</div>
                  </li>
                  <li class="text-sm hover:text-black leading-8">
                    <div onClick={() => linkToPage(navigate, "/experiences")}>Experiences</div>
                  </li>
                  <li class="text-sm hover:text-black leading-8">
                    <div onClick={() => linkToPage(navigate, "/things-to-do")}>Things-to-do</div>
                  </li>
                </ul>
                {/* <!-- Submenu ends -->  */}
              </li>

              <li>
                <div onClick={() => linkToPage(navigate, "/rooms")} class="hover:text-black"
                >ROOMS</div>
              </li>
              <li>
                <div onClick={() => linkToPage(navigate, "/gallery")} class="hover:text-black">GALLERY</div>
              </li>
              <li class="flex relative group">
                <div class="hover:text-black mr-1 flex justify-center items-center space-x-1">
                  <p>OTHERS</p>
                  <FaSolidAngleDown class="fill-white" />
                </div>
                <ul class="absolute text-gray-800 z-50 bg-white p-3 w-52 top-6 transform scale-0
                group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg space-y-1">
                  <li class="text-sm hover:text-black leading-8">
                    <div onClick={() => linkToPage(navigate, "/faq")}>Faq</div>
                  </li>
                  <li class="text-sm hover:text-black leading-8">
                    <div onClick={() => linkToPage(navigate, "/our-team")}>Our Team</div>
                  </li>
                </ul>
              </li>
              <li>
                <div onClick={() => linkToPage(navigate, "/contact")} class="hover:text-black">CONTACT</div>
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

                  {/* <!-- Submenu starts --> */}
                  {showAboutSubMenu()?
                  <ul
                    class={`bg-white w-full text-gray-800 flex flex-col space-y-2`}>
                    <li class="text-md leading-8 font-normal hover:text-black pt-2">
                      <div onClick={() => linkToPage(navigate, "/about-us")} class="block pl-16">
                        About us
                      </div>
                    </li>
                    <li class="text-md leading-8 font-normal hover:text-black">
                      <div onClick={() => linkToPage(navigate, "/amenities")} class="block pl-16">
                        Amenities
                      </div>
                    </li>
                    <li class="text-md leading-8 font-normal hover:text-black">
                      <div onClick={() => linkToPage(navigate, "/experiences")} class="block pl-16">
                        Experiences
                      </div>
                    </li>
                    <li class="text-md leading-8 font-normal hover:text-black">
                      <div onClick={() => linkToPage(navigate, "/things-to-do")} class="block pl-16">
                        Things-to-do
                      </div>
                    </li>
                  </ul> : null }
                  {/* <!-- Submenu ends --> */}
                </li>
                <li class="border-b-2 border-white hover:text-black pl-4">
                  <div onClick={() => linkToPage(navigate, "/rooms")} class="block pl-7">
                    Rooms
                  </div>
                </li>
                <li class="border-b-2 border-white hover:text-black pl-4">
                  <div onClick={() => linkToPage(navigate, "/gallery")} class="block pl-7">
                    Gallery
                  </div>
                </li>
                <li class="border-b-2 border-white hover:text-black">
                  <div class="flex items-center space-x-1 pl-11" onClick={()=>toggleMobileSubMenu("others")}>
                    <p>Others</p>
                    <FaSolidAngleDown class="fill-black" />
                  </div>

                  {/* <!-- Submenu starts --> */}
                  {showOthersSubMenu()?
                  <ul
                    class={`bg-white text-gray-800 w-full flex flex-col space-y-2`}>
                    <li class="text-md leading-8 font-normal hover:text-black pt-2">
                      <div onClick={() => linkToPage(navigate, "/faq")} class="block pl-16">
                        Faq
                      </div>
                    </li>
                    <li class="text-md leading-8 font-normal hover:text-black">
                      <div onClick={() => linkToPage(navigate, "/our-team")} class="block pl-16">
                        Our Team
                      </div>
                    </li>
                  </ul> : null}
                  {/* <!-- Submenu ends --> */}
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