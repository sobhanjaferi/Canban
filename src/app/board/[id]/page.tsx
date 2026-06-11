"use client";

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import BoardDeatilsContainer from "@/features/board/Board-Details-Container";
import Modal from "@/modal/Modal";
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

        <Modal heading="This is heading" ref={ref}>
          <TextInput label="your gender is male ?" />
          This is children
        </Modal>

        <BoardDeatilsContainer />
      </ActiveListProvider>
    </ListsProvider>
  );
}
