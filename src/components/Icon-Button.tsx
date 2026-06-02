import { ComponentProps, memo, ReactNode } from "react";

const IconButton = memo(function IconButton({
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
});

export default IconButton;
