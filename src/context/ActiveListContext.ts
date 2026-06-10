"use client";

import { createContext } from "react";

export type ContextValue = {
  handleActiveButtonClick: (ListId: string, ItemId: string) => void;
  handleDeactiveButtonClick: () => void;
  activeListId: string | null;
  activeListItemId: string | null;
};

export const ActiveListContext = createContext<ContextValue>({
  handleActiveButtonClick: () => {},
  handleDeactiveButtonClick: () => {},
  activeListId: "",
  activeListItemId: "",
});
