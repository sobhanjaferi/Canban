"use client";

import { ReactNode } from "react";
import IconButton from "@/components/Icon-Button";
import { HiDotsHorizontal } from "react-icons/hi";
import BoardDetailItem from "./Board-Detail-Item";

export default function BoardDetailBox(): ReactNode {
   return (
      <div className="min-w-70 max-w-70 flex flex-col justify-start items-center bg-gray-200 rounded-lg">
         <section className="flex justify-between items-center w-full p-4 pb-3">
            <h2>To Do</h2>

            <IconButton>
               <HiDotsHorizontal className="text-2xl" />
            </IconButton>
         </section>

         <section className="w-full flex flex-col justify-start items-center gap-3 p-4 pb-1 pt-1 max-h-70 overflow-auto mb-4">
            <BoardDetailItem />
         </section>
      </div>
   );
}
