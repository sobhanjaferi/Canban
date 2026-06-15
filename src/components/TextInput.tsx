"use client";

import { ComponentProps, ReactNode, useId } from "react";
type Props = ComponentProps<"input"> & {
  label: string;
  error?: string | null;
};

function TextInput({
  className,
  label,
  error,
  ...otherProps
}: Props): ReactNode {
  const id = useId();

  return (
    <div className={`grid gap-2 ${className}`}>
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        {...otherProps}
        className="p-1 rounded-sm outline outline-gray-600 focus:outline-2 focus:outline-blue-500"
      />

      <span className={"text-red-500"}>{error}</span>
    </div>
  );
}

export default TextInput;
