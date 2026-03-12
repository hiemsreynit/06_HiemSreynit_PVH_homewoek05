"use client";

import { ArrowDownAZ, ArrowUpAZ, BookMarked } from "lucide-react";
import { useEffect, useState } from "react";
import { items } from "./CardComponent";

export default function SortComponent({onClick}) {
  const [sortItems, setSortedItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const result = [...items].sort((a, b) => {
      return sortOrder === "asc"
        ? a.item_name.localeCompare(b.item_name)
        : b.item_name.localeCompare(a.item_name);
    });
    setSortedItems(result);
  }, [items, sortOrder]);

  return (
    <>
      <section className="flex items-center gap-x-4">
        <BookMarked className="hover:text-yellow-400"/>
        <button onClick={() => setSortOrder("asc")}>
          <ArrowDownAZ className="hover:text-yellow-400"/>
        </button>
        <ArrowUpAZ onClick={() => setSortOrder("desc")} className="hover:text-yellow-400"/>
      </section>
    </>
  );
}
