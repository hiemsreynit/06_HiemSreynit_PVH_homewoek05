import { ArrowDownAZ, ArrowUpAZ, BookMarked } from "lucide-react";

export default function SortComponent({ onSort }) {
  return (
    <>
      <section className="flex items-center gap-x-4">
        <button onClick={() => onSort("asc")}>
          <ArrowDownAZ className="hover:text-yellow-400" />
        </button>
        <ArrowUpAZ
          onClick={() => onSort("desc")}
          className="hover:text-yellow-400"
        />
      </section>
    </>
  );
}
