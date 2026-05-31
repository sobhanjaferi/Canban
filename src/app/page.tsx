import { ReactNode } from "react";
import BoardList from "@/features/board/Board-List";
import Button from "@/components/Button";

export default function Home(): ReactNode {
  return (
    <div className="flex flex-col gap-5">
      <section className="flex justify-between items-center">
        <h1 className={"mb-2"}>Boards</h1>

        <Button color="blue">CREATE</Button>
      </section>

      <BoardList />
    </div>
  );
}
