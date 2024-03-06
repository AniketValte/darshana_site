import kunjalogo from "assets/images/logo.png";
import { defaultPadding } from "config/styles";
import { AiOutlineClose, AiOutlineHome } from "solid-icons/ai";
import { FiMail, } from "solid-icons/fi";
import { _PHONE_NO } from "config/defaults";
import Nav from "./nav";
import { FaSolidBars } from "solid-icons/fa";
import { showMobileMenu } from "AppStore";
import { toggleMobileMenu } from "AppActions";

const Header7 = () => {


  return (
    <>
      <nav class={`relative w-full bg-white shadow `}>
        {/* <div class={`w-full flex flex-col md:flex-row justify-between items-center py-3 md:px-24`}> */}
        <div class={`w-full flex justify-between items-center py-3 ${defaultPadding}`}>
          <div class="hidden xl:flex items-center gap-2 ">
            <div class="flex items-center justify-center rounded-full w-10 h-10 border-2 border-secondary">
              <AiOutlineHome class="w-5 h-5 fill-secondary" />
            </div>
            <div class="flex flex-col space-y-1 normalText">
              <p class="text-sm text-header_text ">Jageshwar Dham,</p>
              <p class="text-sm text-header_text">Uttarakhand, 263623</p>
            </div>
          </div>
          <div class="hidden xl:flex items-center gap-2 normalText">
            <div class="flex items-center justify-center rounded-full w-10 h-10 border-2 border-secondary">
              <FiMail class="w-5 h-5 text-secondary" />
            </div>
            <div class="flex flex-col space-y-1">
              <p class="text-sm text-header_text">Email Us</p>
              <p class="text-sm text-header_text">hello@kunjavillagehomestay.com</p>
            </div>
          </div>
            <div class="items-center">
              <img src={kunjalogo} alt="kunja logo" class="w-20 h-full object-cover" />
            </div>

            <div class="text-center hidden xl:inline sm:text-left">
              <p class="text-secondary font-extrabold text-2xl whitespace-nowrap px-5">{_PHONE_NO}</p>
            </div>
           
              {showMobileMenu() ? (
                <AiOutlineClose class="lg:hidden hover:cursor-pointer fill-secondary w-8 h-8" onClick={toggleMobileMenu} />
              ) : (
                <FaSolidBars class="lg:hidden hover:cursor-pointer fill-secondary w-8 h-8" onClick={toggleMobileMenu} />
              )}

            <div class="hidden lg:inline normalText whitespace-nowrap">
              <button class="ubuntuFont text-xs font-bold text-white bg-red-800 hover:bg-button_hover px-12 py-4 text-center rounded-md">
                BOOK YOUR STAY
              </button>
            </div>

        </div>
        <Nav />
      </nav>
    </>
  );
};

export default Header7;
