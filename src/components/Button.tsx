import { ComponentProps, ReactNode } from "react";

interface Props extends ComponentProps<"button"> {
   variant?: "solid" | "outline";
   color?: "gray" | "blue";
}

export default function Button({
   color = "gray",
   variant = "solid",
   children,
   ...otherProps
}: Props): ReactNode {
   return (
      <button
         {...otherProps}
         className={`p-2.5 rounded-md text-xl cursor-pointer active:opacity-10 outline-0
          ${color === "gray" && variant === "outline" && "bg-gray-200 text-gray-600 border-2 border-gray-500"}
          ${color === "gray" && variant === "solid" && "bg-gray-500 text-white"}
          ${color === "blue" && variant === "outline" && "bg-blue-200 border-2 border-blue-500 text-blue-600"}
          ${color === "blue" && variant === "solid" && "bg-blue-500 text-white"}
        `}
      >
         {children}
      </button>
   );
}
