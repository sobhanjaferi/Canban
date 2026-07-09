"use client";

import { ListType } from "@/types/List";
import { ListItemType } from "@/types/List-Item";
import { createContext } from "react";

type ListsContextType = {
  lists: ListType[];
  create: (listIndex: number, item: ListItemType) => void;
  remove: (listId: string, itemId: string) => void;
  move: (fromListId: string, itemId: string, toListId: string) => void;
};

export const ListsContext = createContext<ListsContextType>({
  lists: [],
  create: () => {},
  remove: () => {},
  move: () => {},
});
