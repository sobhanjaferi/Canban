"use client";

import { ReactNode } from "react";
import BoardDetailBox from "./Board-detail-box";
import { ListType } from "@/types/List";

type Props = {
  lists: ListType[];
  onClick: (ListId: string, ItemId: string) => void;
  onRemove?: (ListId: string, ItemId: string) => void;
};

export default function BoardDetailList({
  lists,
  onClick,
  onRemove,
}: Props): ReactNode {
  return (
    <section className="flex justify-start items-start gap-3 overflow-auto p-3 sm:p-0 sm:pb-3">
      {lists.map((list) => (
        <BoardDetailBox
          key={list.id}
          list={list}
          onClick={onClick}
          onRemove={onRemove}
        />
      ))}
    </section>
  );
}
