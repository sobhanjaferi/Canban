import { ListItemType } from "@/types/List-Item";
import { ReactNode } from "react";

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
  return (
    <div
      className="p-2 rounded-md w-full shadow shadow-gray-600 cursor-pointer bg-white"
      onClick={() => onClick?.(listId, item.id)}
    >
      {item.title}
    </div>
  );
}
