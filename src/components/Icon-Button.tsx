import { ComponentProps, memo, ReactNode } from "react";

const IconButton = memo(function IconButton({
  children,
  ...anotherProps
}: ComponentProps<"button">): ReactNode {
  return (
    <button
      {...anotherProps}
      className={`p-1 text-sm rounded-full cursor-pointer active:opacity-2 aspect-square hover:bg-gray-400/50 ${anotherProps?.className}`}
    >
      {children}
    </button>
  );
});

export default IconButton;
