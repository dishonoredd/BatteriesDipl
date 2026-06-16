"use client";

import { useParams } from "next/navigation";

export default function AccumAdminOne() {
  const { id } = useParams();

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-3xl text-gray-400">ID = {id}</p>
    </div>
  );
}
