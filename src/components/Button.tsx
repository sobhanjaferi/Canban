import { ComponentProps, memo, ReactNode } from "react";

interface Props extends ComponentProps<"button"> {
  variant?: "solid" | "outline";
  color?: "gray" | "blue";
}

const Button = memo(function Button({
  color = "gray",
  variant = "solid",
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      {...otherProps}
      className={`p-2.5 rounded-md text-xl cursor-pointer active:opacity-10 outline-0
          ${color === "gray" && variant === "outline" && "bg-gray-400 text-gray-800 border-2 border-gray-600"}
          ${color === "gray" && variant === "solid" && "bg-gray-400 text-white"}
          ${color === "blue" && variant === "outline" && "bg-blue-200 border-2 border-blue-500 text-blue-700"}
          ${color === "blue" && variant === "solid" && "bg-blue-500 text-white"}
        `}
    >
      {children}
    </button>
  );
});

export default Button;
