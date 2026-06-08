"use client";

import dynamic from "next/dynamic";
import { accumlist } from "@/db/accumslist";
import Image from "next/image";
import { useState } from "react";
import { useResponsiveItemsPerPage } from "@/hooks/useItemsPerPage";

const DynamicActiveBtns = dynamic(() => import("./CatalogActiveBtns"));
const DynamicFavIcon = dynamic(() => import("./CatalogFavIcon"));

export default function CatalogCli() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = useResponsiveItemsPerPage();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = accumlist.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(accumlist.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="max-w-400 mx-auto mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <h2 className="font-semibold text-xl sm:text-2xl text-[#222] text-center sm:text-left">
          Список аккумуляторов
        </h2>

        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <button
            onClick={() => prevPage()}
            disabled={currentPage === 1}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center duration-100 
              ${
                currentPage === 1
                  ? "bg-gray-100 cursor-not-allowed opacity-50"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <span className="text-sm sm:text-base">
            {currentPage} из {totalPages}
          </span>

          <button
            onClick={() => nextPage()}
            disabled={currentPage === totalPages}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center duration-100 
              ${
                currentPage === totalPages
                  ? "bg-gray-100 cursor-not-allowed opacity-50"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <ul className="max-w-400 mx-auto px-4 sm:px-6 grid max-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">
        {currentItems.map((accum) => (
          <li
            key={accum.id}
            className="h-full flex flex-col p-2 shadow-md rounded-2xl bg-white duration-100 hover:bg-gray-100 hover:shadow-lg"
          >
            <div className="relative w-full max-[445]:h-32 max-[639]:h-50  sm:h-38 md:h-52 lg:h-48 xl:h-54">
              <Image
                src={accum.img}
                alt={accum.name}
                fill
                className="rounded-md object-cover"
                loading="lazy"
              />
              <DynamicFavIcon acc={accum} />
            </div>
            <DynamicActiveBtns accum={{ ...accum, amount: 0 }} />
          </li>
        ))}
      </ul>
    </>
  );
}
