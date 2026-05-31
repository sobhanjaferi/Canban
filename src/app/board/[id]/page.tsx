import IconButton from "@/components/Icon-Button";
import BoardDetailList from "@/features/board/Board-detail-list";
import { ReactElement } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function Page(): ReactElement {
  return (
    <div className="flex flex-col gap-3 p-3 sm:p-0">
      <section className="bg-gray-200 py-2 px-3 rounded-lg shadow flex justify-between items-center">
        <h1>Board Title</h1>

        <section className="flex justify-center items-center gap-3">
          <IconButton>
            <HiOutlinePencilAlt className="text-2xl" />
          </IconButton>

          <IconButton>
            <HiOutlinePlusSm className="text-3xl" />
          </IconButton>
        </section>
      </section>

      <BoardDetailList />
    </div>
  );
}
