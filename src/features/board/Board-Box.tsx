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
    <section className={"min-h-70 rounded-lg bg-white col-span-1"}>
      <div
        className={`rounded-t-lg p-5
        ${prop.color === "gray" && "bg-gray-500"}
        ${prop.color === "blue" && "bg-blue-500"}
        ${prop.color === "red" && "bg-red-500"}
        ${prop.color === "green" && "bg-green-500"}
        ${prop.color === "yellow" && "bg-yellow-500"}`}
      ></div>

      <div className={"flex justify-between items-center p-5"}>
        <h2>{prop.title}</h2>

        <Link
          href={`board/${prop.id}`}
          className={"text-blue-700 text-xl font-bold border-b"}
        >
          View Detail
        </Link>
      </div>

      <p className={"p-5 pt-0"}>{prop.content}</p>
    </section>
  );
}
