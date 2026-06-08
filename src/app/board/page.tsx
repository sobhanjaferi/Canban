import { Metadata } from "next";
import { ReactElement } from "react";

export const metadata: Metadata = {
  title: "Board",
};

export default function BoardPage(): ReactElement {
  return (
    <div>
      <h1>Board page</h1>
    </div>
  );
}
