"use client";

import { ReactNode, useState } from "react";
import BoardDetailBox from "./Board-detail-box";
import { ListType } from "@/types/List";
import { listsData } from "@/data/lists-data";

export default function BoardDetailList(): ReactNode {
   const [lists, setLists] = useState<ListType[]>(listsData);

   return (
      <section className="flex justify-start items-start gap-3 overflow-auto h-150 p-3 sm:p-0">
         {lists.map((list) => (
            <BoardDetailBox key={list.id} {...list} />
         ))}
      </section>
   );
}
