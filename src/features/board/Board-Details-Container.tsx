"use client";

import { ReactNode, useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Button from "@/components/Button";
import IconButton from "@/components/Icon-Button";
import BoardDetailList from "@/features/board/Board-detail-list";
import { listsData } from "@/data/lists-data";
import { ListType } from "@/types/List";
import { ListItemType } from "@/types/List-Item";

export default function BoardDeatilsContainer(): ReactNode {
  const [lists, setLists] = useState<ListType[]>(listsData);

  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [activeListItemId, setActiveListItemId] = useState<string | null>(null);

  const handleActiveButtonClick = (ListId: string, ItemId: string): void => {
    setActiveListId(ListId);
    setActiveListItemId(ItemId);
  };

  const handleMoveButtonClick = (destinationId: string): void => {
    setLists((old) => {
      const activeListIndex = old.findIndex((list) => list.id === activeListId);

      const destinationListIndex = old.findIndex(
        (list) => list.id === destinationId,
      );

      if (activeListIndex === -1 || destinationListIndex === -1) {
        console.error("can not find desired list.");

        return old;
      }

      const clone = [...old];

      const listClone = {
        ...clone[activeListIndex],
        items: [...clone[activeListIndex].items],
      };

      const destinationListClone = {
        ...clone[destinationListIndex],
        items: [...clone[destinationListIndex].items],
      };

      const activeListItemIndex = listClone.items.findIndex(
        (item) => item.id === activeListItemId,
      );

      if (activeListItemIndex === -1) {
        console.error("can not find desired list item.");

        return old;
      }

      const [activeItem] = listClone.items.splice(activeListItemIndex, 1);
      destinationListClone.items.push(activeItem);

      clone[activeListIndex] = listClone;
      clone[destinationListIndex] = destinationListClone;

      return clone;
    });
  };

  const handleRemoveButtonClick = (): void => {
    setLists((old) => {
      const activeListIndex = lists.findIndex(
        (list) => list.id === activeListId,
      );

      if (activeListIndex === -1) {
        console.error("can not find desierd list.");

        return old;
      }

      const clone = [...old];
      const activeListClone = {
        ...clone[activeListIndex],
        items: [...clone[activeListIndex].items],
      };

      const deletedItem = activeListClone.items.filter(
        (item) => item.id !== activeListItemId,
      );

      clone[activeListIndex].items = deletedItem;

      return clone;
    });
  };

  const handleCreateButtonClick = (): void => {
    setLists((old) => {
      const clone = [...old];

      const newItem: ListItemType = {
        id: globalThis.crypto.randomUUID(),
        title: globalThis.crypto.randomUUID(),
      };

      clone[0] = {
        ...clone[0],
        items: [...clone[0].items, { id: newItem.id, title: newItem.title }],
      };

      return clone;
    });
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

              <Button onClick={handleRemoveButtonClick}>Remove</Button>
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
