"use client";

import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import BoardDetailBox from "./Board-detail-box";
import { ListType } from "@/types/List";
import { listsData } from "@/data/lists-data";

type Props = {
  setActiveListId: Dispatch<SetStateAction<string | null>>;
  setActiveListItemId: Dispatch<SetStateAction<string | null>>;
};

export default function BoardDetailList({
  setActiveListId,
  setActiveListItemId,
}: Props): ReactNode {
  const [lists] = useState<ListType[]>(listsData);

  const handleActiveButtonClick = (ListId: string, ItemId: string): void => {
    setActiveListId(ListId);
    setActiveListItemId(ItemId);
  };

  return (
    <section className="flex justify-start items-start gap-3 overflow-auto h-150 p-3 sm:p-0">
      {lists.map((list) => (
        <BoardDetailBox
          key={list.id}
          list={list}
          onClick={handleActiveButtonClick}
        />
      ))}
    </section>
  );
}
