"use client";

import Button from "@/components/Button";
import CreateListItemModal from "@/components/CreateListItemModal";
import BoardDeatilsContainer from "@/features/board/Board-Details-Container";
import ActiveListProvider from "@/providers/ActiveListsProvider";
import ListsProvider from "@/providers/ListsProvider";
import { ReactElement, useRef } from "react";

export default function Page(): ReactElement {
  const ref = useRef<HTMLDialogElement>(null);

  const handleOpenButtonClick = (): void => {
    ref.current?.showModal();
  };
  return (
    <ListsProvider>
      <ActiveListProvider>
        <Button color="blue" onClick={handleOpenButtonClick}>
          Open
        </Button>

        <CreateListItemModal ref={ref} />

        <BoardDeatilsContainer />
      </ActiveListProvider>
    </ListsProvider>
  );
}
