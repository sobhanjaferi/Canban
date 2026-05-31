import { ReactElement } from "react";
import Link from "next/link";

export default function Header(): ReactElement {
   return (
      <header className={"p-5"}>
         <Link href={"/"}>
            <h1>canban</h1>
         </Link>
      </header>
   );
}
