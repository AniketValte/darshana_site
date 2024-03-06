import kunjalogo from "assets/images/logo.png";
import { defaultPadding } from "config/styles";
import { AiOutlineClose, AiOutlineHome } from "solid-icons/ai";
import { FiMail, } from "solid-icons/fi";
import { _PHONE_NO } from "config/defaults";
import Nav from "./nav";
import { FaSolidBars } from "solid-icons/fa";
import { showMobileMenu } from "AppStore";
import { toggleMobileMenu } from "AppActions";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header7 = () => {


  return (
    <>
      <nav class={`relative w-full bg-white shadow `}>
        {/* <div class={`w-full flex flex-col md:flex-row justify-between items-center py-3 md:px-24`}> */}
        <div class={`w-full flex justify-between items-center py-3  bg-red-500 ${defaultPadding}`}>
            

            <div class="text-center hidden xl:inline sm:text-left">
              
            <div class="text-center hidden xl:inline sm:text-left text-black">
              {/* <p class="text-secondary font-extrabold text-2xl whitespace-nowrap px-5">{_PHONE_NO}</p> */}

              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram mx-2"></i>
              </a>
             
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter mx-2"></i>
              </a>

              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook mx-2"></i>
              </a>

              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube mx-2"></i>
              </a>
             

            </div>

            
            </div>
           
              {showMobileMenu() ? (
                <AiOutlineClose class="lg:hidden hover:cursor-pointer fill-white w-8 h-8" onClick={toggleMobileMenu} />
              ) : (
                <FaSolidBars class="lg:hidden hover:cursor-pointer fill-white w-8 h-8" onClick={toggleMobileMenu} />
              )}

            <div class="hidden lg:inline normalText whitespace-nowrap">
              <p class="text-black font-bold">First Woman Car Trainer in NorthEast | DATRI</p>
            </div>




          <div class="hidden xl:flex items-center gap-2 ">
            <div class="flex items-center justify-center rounded-full w-10 h-10 border-2 border-black">
              <AiOutlineHome class="w-5 h-5 fill-black" />
            </div>
            <div class="flex flex-col space-y-1 normalText">
              <p class="text-sm text-header_text text-black font-bold">Jageshwar Dham,</p>
              <p class="text-sm text-header_text text-black">Uttarakhand, 263623</p>
            </div>
          </div>





          <div class="hidden xl:flex items-center gap-2 normalText">
            <div class="flex items-center justify-center rounded-full w-10 h-10 border-2 border-black">
              <FiMail class="w-5 h-5 text-black" />
            </div>
            <div class="flex flex-col space-y-1">
              <p class="text-sm text-header_text text-black font-bold">Email Us</p>
              <p class="text-sm text-header_text text-black">hello@kunjavillagehomestay.com</p>
            </div>
          </div>


        </div>
        <Nav />
      </nav>
    </>
  );
};

export default Header7;
