import { ReactNode } from "react";
import IconButton from "@/components/Icon-Button";
import { HiDotsHorizontal } from "react-icons/hi";
import BoardDetailItem from "./Board-Detail-Item";
import { ListType } from "@/types/List";

type Props = {
  list: ListType;
  onClick?: (ListId: string, ItemId: string) => void;
};

export default function BoardDetailBox({ list, onClick }: Props): ReactNode {
  return (
    <div className="min-w-70 max-w-70 flex flex-col justify-start items-center bg-gray-200 rounded-lg">
      <section className="flex justify-between items-center w-full p-4 pb-3">
        <h2>{list.title}</h2>

        <IconButton>
          <HiDotsHorizontal className="text-2xl" />
        </IconButton>
      </section>

      <ul className="w-full flex flex-col justify-start items-center gap-3 p-4 pb-1 pt-1 max-h-70 overflow-auto mb-4">
        {list.items.map((item) => (
          <li key={item.id} className="w-full">
            <BoardDetailItem item={item} listId={list.id} onClick={onClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}
