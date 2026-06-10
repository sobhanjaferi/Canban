"use client";

import { ActiveListContext } from "@/context/ActiveListContext";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

function ActiveListProvider({ children }: PropsWithChildren): ReactNode {
  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [activeListItemId, setActiveListItemId] = useState<string | null>(null);

  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveListId(null);
        setActiveListItemId(null);
      }
    });
  });

  const handleActiveButtonClick = (ListId: string, ItemId: string): void => {
    setActiveListId(ListId);
    setActiveListItemId(ItemId);
  };

  const handleDeactiveButtonClick = (): void => {
    setActiveListId(null);
    setActiveListItemId(null);
  };

  return (
    <ActiveListContext
      value={{
        handleActiveButtonClick,
        handleDeactiveButtonClick,
        activeListId,
        activeListItemId,
      }}
    >
      {children}
    </ActiveListContext>
  );
}

export default ActiveListProvider;
