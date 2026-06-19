"use client";

import Modal from "@/modal/Modal";
import {
  ChangeEvent,
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
  const [title, setTitle] = useState<string>("");
  const [shouldValidateOnChange, setShouldValidateOnChange] =
    useState<boolean>(false);

  const forRef = useRef<HTMLFormElement | null>(null);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim();

    if (shouldValidateOnChange) {
      validateTitle(value);
    }

    setTitle(value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setShouldValidateOnChange(true);

    if (!validateTitle(title)) {
      return;
    }

    const id = globalThis.crypto.randomUUID();
    create(listId, { id, title });
    toast.success("Item Created Successfully");

    ref.current?.close();

    setTitle("");
  };

  const handleCancelButtonClick = (): void => {
    ref.current?.close();
  };

  const handleModalClose = (): void => {
    setTitleError(null);

    forRef.current?.reset();
  };

  const validateTitle = (title: string): boolean => {
    if (title.length === 0) {
      setTitleError("Title cannot be empty!");

      return false;
    }
    setTitleError(null);
    return true;
  };

  const handleResetForm = (): void => {
    setTitle("");
  };

  return (
    <Modal
      onClose={handleModalClose}
      ref={ref}
      heading="Create a New Item"
      {...otherProps}
      className={`${className}`}
    >
      <form
        ref={forRef}
        className="grid gap-3"
        onReset={handleResetForm}
        onSubmit={handleFormSubmit}
      >
        <TextInput
          label="Title"
          type="text"
          name="title"
          error={titleError}
          value={title}
          onChange={handleTitleChange}
        />

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
