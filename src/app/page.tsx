import { ReactNode } from "react";
import BoardList from "@/features/board/Board-List";

export default function Home(): ReactNode {
   return (
      <div>
         <h1 className={"mb-2"}>Boards</h1>

         <BoardList />
      </div>
   );
}
