"use client";

import { PropsWithChildren, ReactNode, useState } from "react";
import { ListsContext } from "@/context/ListsContext";
import { ListType } from "@/types/List";
import { listsData } from "@/data/lists-data";
import { ListItemType } from "@/types/List-Item";

export default function ListsProvider({
  children,
}: PropsWithChildren): ReactNode {
  const [lists, setLists] = useState<ListType[]>(listsData);

  const create = (): void => {
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

  const remove = (listId: string, itemId: string): void => {
    setLists((old) => {
      const activeListIndex = old.findIndex((list) => list.id === listId);

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
        (item) => item.id !== itemId,
      );

      activeListClone.items = deletedItem;
      clone[activeListIndex] = activeListClone;

      return clone;
    });
  };

  const move = (fromListId: string, itemId: string, toListId: string): void => {
    setLists((old) => {
      const activeListIndex = old.findIndex((list) => list.id === fromListId);

      const destinationListIndex = old.findIndex(
        (list) => list.id === toListId,
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
        (item) => item.id === itemId,
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

  return (
    <ListsContext value={{ lists, create, remove, move }}>
      {children}
    </ListsContext>
  );
}
