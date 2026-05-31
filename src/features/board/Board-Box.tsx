import { ReactElement } from "react";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  content: string;
  color: "gray" | "blue" | "red" | "green" | "yellow";
}

export default function BoardBox(prop: Props): ReactElement {
  return (
    <section className={"min-h-50 rounded-lg bg-white col-span-1"}>
      <div
        className={`rounded-t-lg p-4
        ${prop.color === "gray" && "bg-gray-400"}
        ${prop.color === "blue" && "bg-blue-400"}
        ${prop.color === "red" && "bg-red-400"}
        ${prop.color === "green" && "bg-green-400"}
        ${prop.color === "yellow" && "bg-yellow-400"}`}
      ></div>

      <div className={"flex justify-between items-center p-5"}>
        <h2>{prop.title}</h2>

        <Link
          href={`board/${prop.id}`}
          className={"text-blue-500 text-xl border-b"}
        >
          View
        </Link>
      </div>

      <p className={"p-5 pt-0"}>{prop.content}</p>
    </section>
  );
}
