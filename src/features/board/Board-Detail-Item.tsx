"use client";

import IconButton from "@/components/Icon-Button";
import { ActiveListContext } from "@/context/ActiveListContext";
import { ListsContext } from "@/context/ListsContext";
import { ListItemType } from "@/types/List-Item";
import { MouseEvent, ReactNode, use, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Slide, toast } from "react-toastify";

type Props = {
  listId: string;
  item: ListItemType;
};

export default function BoardDetailItem({ listId, item }: Props): ReactNode {
  const { remove } = use(ListsContext);
  const { handleActiveButtonClick, handleDeactiveButtonClick } =
    use(ActiveListContext);

  const handleRemoveButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();

    remove(listId, item.id);

    handleDeactiveButtonClick();

    toast.success("Item Removed Successfully", {
      position: "bottom-right",
      autoClose: 2000,
      pauseOnHover: true,
      theme: "light",
      transition: Slide,
    });
  };

  const [mouseEnter, setMouseEnter] = useState<boolean>(false);

  return (
    <div
      onClick={() => handleActiveButtonClick?.(listId, item.id)}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={`p-1 rounded-md shadow shadow-gray-400 bg-white active:opacity-10 flex justify-between items-start cursor-pointer`}
    >
      {item.title}

      <IconButton
        onClick={handleRemoveButtonClick}
        className={
          mouseEnter
            ? "p-1 rounded-full cursor-pointer active:opacity-2 aspect-square hover:bg-gray-300/60"
            : "hidden"
        }
      >
        <MdDeleteOutline />
      </IconButton>
    </div>
  );
}
