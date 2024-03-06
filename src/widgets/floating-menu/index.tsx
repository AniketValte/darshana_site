import { A, useNavigate } from "@solidjs/router";
import { FaSolidChevronUp } from "solid-icons/fa";
import { IoLogoWhatsapp } from "solid-icons/io";
import { createEffect, createSignal, mergeProps } from "solid-js";
import toast from "solid-toast";

const FloatingMenu = (_props: any) => {
  const props = mergeProps(_props);
  const [visible, setVisible] = createSignal(false) as any;
  const navigate = useNavigate();

  // createEffect(() => {
  //   if (props.toggle) {
  //     setVisible(false);
  //   }
  // });

  return (
    <section class="floating-container">
      <div class={`absolute right-6 lg:right-8 w-14  bottom-12 duration-500`}>
        {props.toggle ? (
          <>
            <div
              class={`h-14 w-14 flex items-center justify-center
      ${visible() ? `-translate-y-9 opacity-100 lg:cursor-pointer z-50` : "opacity-0 -z-10"}
       rounded-full bg-tertiary active:scale-75 duration-500`}></div>
          </>
        ) : null}
        {/* <div
      onClick={() => setVisible(!visible())}
      class={`h-14 w-14 rounded-full bg-primary flex items-center justify-center  
      ${props.toggle ? `-translate-y-5 opacity-100 z-40` : "opacity-0 -z-10"}
         lg:cursor-pointer  duration-500`}
    >
      {visible() ? (
        <CrossIcon stroke="2.5" style="w-8 h-8 text-tertiary active:scale-75  duration-500" />
      ) : (
        <MenuDotIcon stroke="2.5" style="w-8 h-8 text-tertiary fill-tertiary active:scale-75  duration-500" />
      )}
    </div> */}
        <div
          onClick={() => props?.handleSmoothScroll("", 0)}
          class={`h-14 w-14 rounded-full bg-tertiary flex items-center justify-center  
      ${props.toggle ? `-translate-y-5 opacity-100 z-50` : "opacity-0 -z-10"}
         lg:cursor-pointer  duration-500`}>
          <FaSolidChevronUp class="w-7 h-7 fill-white" />
        </div>
      </div>
    </section>
  );
};

export default FloatingMenu;
