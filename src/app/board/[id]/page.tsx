import BoardDeatilsContainer from "@/features/board/Board-Details-Container";
import ActiveListProvider from "@/providers/ActiveListsProvider";
import ListsProvider from "@/providers/ListsProvider";
import { ReactElement } from "react";

export default function Page(): ReactElement {
  return (
    <ListsProvider>
      <ActiveListProvider>
        <BoardDeatilsContainer />
      </ActiveListProvider>
    </ListsProvider>
  );
}
