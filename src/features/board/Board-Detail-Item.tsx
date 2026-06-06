"use client";

import IconButton from "@/components/Icon-Button";
import { ListsContext } from "@/context/ListsContext";
import { ListItemType } from "@/types/List-Item";
import { MouseEvent, ReactNode, use, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

type Props = {
  listId: string;
  item: ListItemType;
  onClick?: (ListId: string, ItemId: string) => void;
};

export default function BoardDetailItem({
  listId,
  item,
  onClick,
}: Props): ReactNode {
  const { remove } = use(ListsContext);

  const handleRemoveButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();

    remove(listId, item.id);
  };

  const [mouseEnter, setMouseEnter] = useState<boolean>(false);

  return (
    <div
      onClick={() => onClick?.(listId, item.id)}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={
        "p-1 rounded-md shadow shadow-gray-400 bg-white active:opacity-10 flex justify-between items-start cursor-pointer"
      }
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
