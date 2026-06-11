"use client";

import IconButton from "@/components/Icon-Button";
import { ComponentProps, MouseEvent, ReactElement, RefObject } from "react";
import { IoMdClose } from "react-icons/io";

type Props = ComponentProps<"dialog"> & {
  heading: string;
  ref: RefObject<HTMLDialogElement | null>;
};

function Modal({
  heading,
  children,
  className,
  ref,
  onClick,
  ...otherProps
}: Props): ReactElement {
  const handleCloseButtonClick = (): void => {
    ref.current?.close();
  };

  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.target === e.currentTarget) {
      ref.current?.close();
    }

    onClick?.(e);
  };

  return (
    <dialog
      onClick={handleDialogClick}
      className={`min-w-90 max-w-200 m-auto rounded-lg text-gray-800 font-bold ${className}`}
      {...otherProps}
      ref={ref}
    >
      <header className="flex justify-between items-center gap-5 border-b p-3">
        <div>{heading}</div>

        <IconButton onClick={handleCloseButtonClick}>
          <IoMdClose />
        </IconButton>
      </header>

      <main className="p-3">{children}</main>
    </dialog>
  );
}

export default Modal;
