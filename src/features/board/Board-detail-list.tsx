import { ReactNode } from "react";
import BoardDetailBox from "./Board-detail-box";

export default function BoardDetailList(): ReactNode {
   return (
      <section className="flex justify-start items-start gap-3 overflow-auto h-150 p-3 sm:p-0">
         <BoardDetailBox />
      </section>
   );
}
