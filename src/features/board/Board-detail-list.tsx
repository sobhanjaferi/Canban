"use client";

import { ReactNode } from "react";
import BoardDetailBox from "./Board-detail-box";
import { ListType } from "@/types/List";

type Props = {
  lists: ListType[];
  onClick: (ListId: string, ItemId: string) => void;
};

export default function BoardDetailList({ lists, onClick }: Props): ReactNode {
  return (
    <section className="flex justify-start items-start gap-3 overflow-auto h-150 p-3 sm:p-0">
      {lists.map((list) => (
        <BoardDetailBox key={list.id} list={list} onClick={onClick} />
      ))}
    </section>
  );
}
