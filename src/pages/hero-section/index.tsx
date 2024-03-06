import heroImg from "assets/images/heroImg.jpg";

const HeroWithHeader8 = () => {
  return (
    <header>
      <div
        class="w-full bg-center bg-cover h-[38rem]"
        style={`background-image: url('${heroImg}')`}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div class="text-center">
            <h1 class="text-3xl font-semibold text-white lg:text-4xl">
            Unlock the Road to <span class="text-red-500">Confidence</span> and <span class="text-red-500">Freedom.</span> 
            </h1>
            <button class="w-full px-5 py-2 mt-12 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-black rounded-md lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-blue-500">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroWithHeader8;


 <div
        class="w-full bg-center bg-cover h-[38rem]"
        style={`background-image: url('${heroImg}')`}
      ></div> 

    //   <div
    //   class="w-full bg-center bg-cover h-[38rem]"
    //   style="background-image: url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');"
    // >