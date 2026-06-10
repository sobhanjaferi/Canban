import BoardDeatilsContainer from "@/features/board/Board-Details-Container";
import ActiveListProvider from "@/providers/ActiveListsProvider";
import ListsProvider from "@/providers/ListsProvider";
import { Metadata } from "next";
import { ReactElement } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Board / ${id}`,
  };
}

export default function Page(): ReactElement {
  return (
    <ListsProvider>
      <ActiveListProvider>
        <BoardDeatilsContainer />
      </ActiveListProvider>
    </ListsProvider>
  );
}
