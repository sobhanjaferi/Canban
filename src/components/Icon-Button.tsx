import { ComponentProps, ReactNode } from "react";

export default function IconButton({
  children,
  ...anotherProps
}: ComponentProps<"button">): ReactNode {
  return (
    <button
      {...anotherProps}
      className="cursor-pointer active:opacity-10 p-1 rounded-full hover:bg-gray-300"
    >
      {children}
    </button>
  );
}
