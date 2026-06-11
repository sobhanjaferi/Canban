"use client";

import IconButton from "@/components/Icon-Button";
import { ComponentProps, ReactElement, RefObject } from "react";
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
  ...otherProps
}: Props): ReactElement {
  const handleCloseButtonClick = (): void => {
    ref.current?.close();
  };

  return (
    <dialog
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
