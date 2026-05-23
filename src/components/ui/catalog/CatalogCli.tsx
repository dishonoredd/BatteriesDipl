"use client";

import { accumlist } from "@/db/accumslist";
import CatalogActiveBtns from "./CatalogActiveBtns";
import CatalogFavIcon from "./CatalogFavIcon";
import Image from "next/image";
import { useState } from "react";

export default function CatalogCli() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

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
      <div className=" max-w-400 mx-auto mb-16 flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-[#222]">
          Каталог аккумуляторов
        </h2>
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={() => prevPage()}
            className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center duration-100 hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          <span>
            {currentPage} из {totalPages}
          </span>
          <button
            onClick={() => nextPage()}
            className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center duration-100 hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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

      <ul className=" max-w-400 mx-auto grid grid-cols-6 gap-6 ">
        {currentItems.map((accum) => (
          <li
            key={accum.id}
            className="h-full flex flex-col p-2 shadow-md rounded-2xl bg-white duration-100 hover:bg-gray-100 hover:shadow-lg"
          >
            <div className="relative w-full h-54">
              <Image
                src={accum.img}
                alt={accum.name}
                fill
                className=" rounded-md"
              />
              <CatalogFavIcon acc={accum} />
            </div>
            <CatalogActiveBtns accum={{ ...accum, amount: 0 }} />
          </li>
        ))}
      </ul>
    </>
  );
}
