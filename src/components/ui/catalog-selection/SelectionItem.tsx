import { AccumType } from "@/types/AccumType";
import CatalogActiveBtns from "../catalog/CatalogActiveBtns";
import CatalogFavIcon from "../catalog/CatalogFavIcon";
import Image from "next/image";

type SelectionItemP = {
  accum: AccumType;
};

export default function SelectionItem(props: SelectionItemP) {
  return (
    <li className="flex flex-col bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50">
      <div className="relative w-full pt-[100%] rounded-t-xl overflow-hidden">
        <Image
          src={props.accum.img}
          alt={props.accum.name}
          fill
          className="object-contain p-2"
        />
        <div className="absolute top-1 right-1">
          <CatalogFavIcon acc={props.accum} />
        </div>
      </div>

      <div className="p-2 flex flex-col flex-1">
        <p className="text-[10px] text-gray-400 uppercase tracking-wide">
          {props.accum.brand}
        </p>
        <p className="text-xs font-medium text-[#222] line-clamp-2 min-h-6">
          {props.accum.name}
        </p>

        <div className=" flex flex-wrap gap-1 text-[10px] text-gray-500">
          <span className="bg-gray-100 px-1.5 py-0.5 rounded">
            {props.accum.capacity}Ач
          </span>
          <span className="bg-gray-100 px-1.5 py-0.5 rounded">
            {props.accum.voltage}В
          </span>
        </div>

        <div className="mt-1">
          <CatalogActiveBtns accum={{ ...props.accum, amount: 0 }} />
        </div>
      </div>
    </li>
  );
}
