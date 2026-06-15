import { ReactNode, useRef } from "react";
import IconButton from "@/components/Icon-Button";
import { HiDotsHorizontal, HiOutlinePlusSm } from "react-icons/hi";
import BoardDetailItem from "./Board-Detail-Item";
import { ListType } from "@/types/List";
import CreateListItemModal from "@/components/CreateListItemModal";

type Props = {
  list: ListType;
};

export default function BoardDetailBox({ list }: Props): ReactNode {
  const ref = useRef<HTMLDialogElement>(null);

  const handleOpenButtonClick = (): void => {
    ref.current?.showModal();
  };

  return (
    <div className="min-w-70 max-w-70 flex flex-col justify-start items-center bg-gray-200 rounded-lg">
      <section className="flex justify-between items-center w-full p-4 pb-3">
        <h2>{list.title}</h2>

        <div>
          <IconButton onClick={handleOpenButtonClick}>
            <HiOutlinePlusSm className="text-2xl" />
          </IconButton>

          <IconButton>
            <HiDotsHorizontal className="text-2xl" />
          </IconButton>
        </div>
      </section>

      <ul className="w-full flex flex-col justify-start items-center gap-3 p-4 pb-1 pt-1 max-h-70 overflow-auto mb-4">
        {list.items.map((item) => (
          <li key={item.id} className="w-full">
            <BoardDetailItem item={item} listId={list.id} />
          </li>
        ))}
      </ul>

      <CreateListItemModal ref={ref} listId={list.id} />
    </div>
  );
}
