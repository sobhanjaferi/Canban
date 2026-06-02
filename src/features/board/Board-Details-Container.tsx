import { ReactNode, useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Button from "@/components/Button";
import IconButton from "@/components/Icon-Button";
import BoardDetailList from "@/features/board/Board-detail-list";

export default function BoardDeatilsContainer(): ReactNode {
  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [activeListItemId, setActiveListItemId] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-3 p-3 sm:p-0">
      <section className="bg-gray-200 py-2 px-3 rounded-lg shadow flex justify-between items-center">
        <h1>Board Title</h1>

        <section className="flex justify-center items-center gap-3">
          {activeListId !== null && activeListItemId !== null && (
            <section className="flex jus items-center gap-5">
              <Button color="blue" variant="solid">
                Doing
              </Button>

              <Button color="blue" variant="solid">
                Done
              </Button>

              <Button color="blue" variant="solid">
                Remove
              </Button>
            </section>
          )}

          <IconButton>
            <HiOutlinePencilAlt className="text-2xl" />
          </IconButton>

          <IconButton>
            <HiOutlinePlusSm className="text-3xl" />
          </IconButton>
        </section>
      </section>

      <BoardDetailList
        setActiveListId={setActiveListId}
        setActiveListItemId={setActiveListItemId}
      />
    </div>
  );
}
