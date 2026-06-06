"use client";

import { ReactNode, use, useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Button from "@/components/Button";
import IconButton from "@/components/Icon-Button";
import BoardDetailList from "@/features/board/Board-detail-list";
import { ListsContext } from "@/context/ListsContext";

export default function BoardDetailsContainer(): ReactNode {
  const { lists, create, move } = use(ListsContext);

  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [activeListItemId, setActiveListItemId] = useState<string | null>(null);

  const handleActiveButtonClick = (ListId: string, ItemId: string): void => {
    setActiveListId(ListId);
    setActiveListItemId(ItemId);
  };

  const handleMoveButtonClick = (destinationId: string): void => {
    if (activeListId && activeListItemId) {
      move(activeListId, activeListItemId, destinationId);
    }

    setActiveListId(null);
    setActiveListItemId(null);
  };

  const handleCreateButtonClick = (): void => {
    create();
  };

  return (
    <div className="flex flex-col gap-3 p-3 sm:p-0">
      <section className="bg-gray-200 py-2 px-3 rounded-lg shadow flex justify-between items-center">
        <h1>Board Title</h1>

        <section className="flex justify-center items-center gap-3">
          {activeListId !== null && activeListItemId !== null && (
            <section className="flex jus items-center gap-5">
              {lists
                .filter((list) => list.id != activeListId)
                .map((list) => (
                  <Button
                    key={list.id}
                    onClick={() => handleMoveButtonClick(list.id)}
                  >
                    {list.title}
                  </Button>
                ))}

              {/* <Button onClick={handleRemoveButtonClick}>Remove</Button> */}
            </section>
          )}

          <IconButton>
            <HiOutlinePencilAlt className="text-2xl" />
          </IconButton>

          <IconButton onClick={handleCreateButtonClick}>
            <HiOutlinePlusSm className="text-3xl" />
          </IconButton>
        </section>
      </section>

      <BoardDetailList lists={lists} onClick={handleActiveButtonClick} />
    </div>
  );
}
