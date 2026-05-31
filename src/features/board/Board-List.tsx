import { ReactElement } from "react";
import BoardBox from "@/features/board/Board-Box";

export default function BoardList(): ReactElement {
  return (
    <div
      className={
        "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-5 sm:p-0"
      }
    >
      <BoardBox
        id={1}
        title={"board 1"}
        color={"green"}
        content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      />

      <BoardBox
        id={2}
        title={"board 2"}
        color={"yellow"}
        content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      />

      <BoardBox
        id={3}
        title={"board 3"}
        color={"blue"}
        content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      />
    </div>
  );
}
