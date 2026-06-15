"use client";

import Modal from "@/modal/Modal";
import {
  ComponentProps,
  FormEvent,
  ReactNode,
  use,
  useRef,
  useState,
} from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { ListsContext } from "@/context/ListsContext";
import { toast } from "react-toastify";

type Props = Omit<ComponentProps<typeof Modal>, "children" | "heading"> & {
  listId: string;
};

function CreateListItemModal({
  ref,
  className,
  listId,
  ...otherProps
}: Props): ReactNode {
  const { create } = use(ListsContext);

  const [titleError, setTitleError] = useState<string | null>(null);
  const forRef = useRef<HTMLFormElement | null>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const id = globalThis.crypto.randomUUID();
    const title = formData.get("title") as string;

    if (!validateTitle(title)) {
      return;
    }

    create(listId, { id, title });
    toast.success("Item Created Successfully");

    ref.current?.close();
  };

  const handleCancelButtonClick = (): void => {
    ref.current?.close();
  };

  const handleModalClose = (): void => {
    setTitleError(null);

    forRef.current?.reset();
  };

  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== "string") {
      setTitleError("Title should be a string!");

      return false;
    } else if (title.trim().length === 0) {
      setTitleError("Title cannot be empty!");

      return false;
    }
    setTitleError(null);
    return true;
  };

  return (
    <Modal
      onClose={handleModalClose}
      ref={ref}
      heading="Create a New Item"
      {...otherProps}
      className={`${className}`}
    >
      <form ref={forRef} className="grid gap-3" onSubmit={handleFormSubmit}>
        <TextInput label="Title" type="text" name="title" error={titleError} />

        <section className="flex justify-end gap-2">
          <Button type="reset" onClick={handleCancelButtonClick}>
            Cancel
          </Button>

          <Button type="submit" color="blue">
            Submit
          </Button>
        </section>
      </form>
    </Modal>
  );
}

export default CreateListItemModal;
