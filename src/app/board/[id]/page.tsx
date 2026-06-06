import BoardDeatilsContainer from "@/features/board/Board-Details-Container";
import ListsProvider from "@/providers/ListsProvider";
import { ReactElement } from "react";

export default function Page(): ReactElement {
  return (
    <div>
      <ListsProvider>
        <BoardDeatilsContainer />
      </ListsProvider>
    </div>
  );
}
