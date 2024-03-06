import { heroImg } from "assets/images";

const HeroWithHeader2 = () => {
  return (
    <section class="bg-white ">
      <nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div class="flex items-center justify-between">
          <a href="#">
            <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
          </a>

          {/* <!-- Mobile menu button --> */}
          <div class="flex lg:hidden">
            <button
              type="button"
              class="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
              aria-label="toggle menu"
            >
              <svg
                x-show="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
              </svg>

              <svg
                x-show="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg: lg:shadow-none  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
          <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
            <a class="text-gray-700 transition-colors duration-300 transform lg:mx-8   hover:text-blue-500" href="#">
              Home
            </a>
            <a class="text-gray-700 transition-colors duration-300 transform lg:mx-8   hover:text-blue-500" href="#">
              Components
            </a>
            <a class="text-gray-700 transition-colors duration-300 transform lg:mx-8   hover:text-blue-500" href="#">
              Pricing
            </a>
            <a class="text-gray-700 transition-colors duration-300 transform lg:mx-8   hover:text-blue-500" href="#">
              Contact
            </a>
          </div>

          <a
            class="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto"
            href="#"
          >
            Get started
          </a>
        </div>
      </nav>

      <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800  lg:text-4xl">
            Building Your Next App with our Awesome components
          </h1>
          <p class="mt-6 text-gray-500 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
          </p>
          <button class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
            Start 14-Day free trial
          </button>
          <p class="mt-3 text-sm text-gray-400 ">No credit card required</p>
        </div>

        <div class="flex justify-center mt-10">
          <img
            class="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroWithHeader2;
