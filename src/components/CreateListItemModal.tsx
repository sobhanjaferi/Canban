import Modal from "@/modal/Modal";
import { ComponentProps, ReactNode } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

type Props = Omit<ComponentProps<typeof Modal>, "children" | "heading">;

function CreateListItemModal({
  ref,
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <Modal
      ref={ref}
      heading="Create a New Item"
      {...otherProps}
      className={`${className}`}
    >
      <form className="grid gap-3 ">
        <TextInput label="Title" />

        <section className="flex justify-end gap-2">
          <Button type="button">Cancel</Button>

          <Button type="submit" color="blue">
            Submit
          </Button>
        </section>
      </form>
    </Modal>
  );
}

export default CreateListItemModal;
