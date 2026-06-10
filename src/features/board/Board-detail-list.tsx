"use client";

import { ReactNode } from "react";
import BoardDetailBox from "./Board-detail-box";
import { ListType } from "@/types/List";

type Props = {
  lists: ListType[];
};

export default function BoardDetailList({ lists }: Props): ReactNode {
  return (
    <section className="flex justify-start items-start gap-3 overflow-auto p-3 sm:p-0 sm:pb-3">
      {lists.map((list) => (
        <BoardDetailBox key={list.id} list={list} />
      ))}
    </section>
  );
}
