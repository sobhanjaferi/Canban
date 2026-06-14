"use client";

import Modal from "@/modal/Modal";
import { ComponentProps, FormEvent, ReactNode, use } from "react";
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

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const id = globalThis.crypto.randomUUID();
    const title = formData.get("title") as string;

    create(listId, { id, title });
    toast.success("Item Created Successfully");

    e.currentTarget.reset();
    ref.current?.close();
  };

  const handleCancelButtonClick = (): void => {
    ref.current?.close();
  };

  return (
    <Modal
      ref={ref}
      heading="Create a New Item"
      {...otherProps}
      className={`${className}`}
    >
      <form className="grid gap-3" onSubmit={handleFormSubmit}>
        <TextInput label="Title" type="text" name="title" />

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
