import { ListItemType } from "@/types/List-Item";
import { ReactNode } from "react";

export default function BoardDetailItem({ title }: ListItemType): ReactNode {
   return (
      <div className="p-2 rounded-md w-full shadow shadow-gray-600 cursor-pointer bg-white">
         {title}
      </div>
   );
}
