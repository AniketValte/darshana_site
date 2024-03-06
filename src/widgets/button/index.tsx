import { JSXElement, mergeProps } from "solid-js";

type ButtonProps = {
  title: string;
  onClick?: (event: MouseEvent) => void;
  style?: "filled" | "outline";
  textColor?: string;
  bgColor?: string;
  width?: string;
  height?: string;
  textSize?: string;
  fontSize?: string;
  paddingX?: string;
  paddingY?: string;
  borderSize?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  roundedSize?: string;
  animationDuration?: string;
  children?: JSXElement;
  childPosition?: "left" | "right";
  loading?: boolean;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
};

const Button = (_props: ButtonProps) => {
  const props = mergeProps(
    {
      title: "Submit",
      // type: "submit",
      style: "filled",
      textColor: "white",
      bgColor: "bg-black", //only passing color does not work
      width: "w-28 lg:w-36",
      height: "h-10 lg:h-12",
      textSize: "base",
      fontSize: "normal",
      paddingX: "4",
      paddingY: "2",
      borderSize: "2",
      borderColor: "border-black", //only passing color does not work
      hoverBgColor: "hover:bg-black", //only passing color does not work
      hoverTextColor: "hover:bg-white", //only passing color does not work
      roundedSize: "md",
      animationDuration: "500",
      children: null,
      childPosition: "left",
      loading: false,
      disabled: false,
    },
    _props
  );

  return (
    <>
      {props.style == "filled" ? (
        <button
          type={props.type}
          onClick={props.onClick}
          disabled={props.disabled}
          class={`${props.width} ${props.height} px-${props.paddingX} py-${props.paddingY} text-${
            props.textColor
          } text-${props.textSize} font-${props.fontSize} rounded-${props.roundedSize} ${
            props.bgColor
          } hover:opacity-90 ease-in-out duration-${props.animationDuration} ${
            props.disabled || props.loading
              ? "opacity-60 hover:opacity-60 cursor-not-allowed"
              : "cursor-pointer active:scale-90"
          }`}
        >
          {props.loading ? (
            <div class="spinnerBig"></div>
          ) : (
            <div
              class={`w-full h-full flex ${
                props.childPosition == "left" ? "flex-row" : "flex-row-reverse"
              } items-center justify-center gap-x-2`}
            >
              {props.children} {props.title}
            </div>
          )}
        </button>
      ) : (
        <button
          type={props.type}
          onClick={props.onClick}
          disabled={props.disabled}
          class={`${props.width} ${props.height} px-${props.paddingX} py-${props.paddingY} border-${props.borderSize} ${
            props.borderColor
          } text-${props.textColor} text-${props.textSize} font-${props.fontSize} rounded-${props.roundedSize} ${
            props.hoverBgColor
          } ${props.hoverTextColor} ease-in-out duration-${props.animationDuration} ${
            props.disabled || props.loading
              ? "opacity-60 hover:opacity-60 cursor-not-allowed"
              : "cursor-pointer active:scale-90"
          }`}
        >
          {props.loading ? (
            <div class="spinnerBig"></div>
          ) : (
            <div
              class={`w-full h-full flex ${
                props.childPosition == "left" ? "flex-row" : "flex-row-reverse"
              } items-center justify-center gap-x-2`}
            >
              {props.children} {props.title}
            </div>
          )}
        </button>
      )}
    </>
  );
};

export default Button;
