"use client";
import { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import CardComponent from "./CardComponent";
import SortComponent from "./SortComponent";
import { items as data } from "../data/items";
import BookmarkComponent from "./BookMarkComponent";

export default function MainComponent() {
  const [items, setItems] = useState(data);
  const [filteredItem, setFilteredItem] = useState(items);
  const [filterBookmark, setFilterBookmark] = useState(false);

  const handleSort = (sortOrder) => {
    const result = [...items].sort((a, b) => {
      return sortOrder === "asc"
        ? a.item_name.localeCompare(b.item_name)
        : b.item_name.localeCompare(a.item_name);
    });

    setFilteredItem(result);
  };

  const handleBookmark = (item) => {
    const updatedItems = items.map((i) =>
      i.id === item.id ? { ...i, saved: !i.saved } : i,
    );
    setItems(updatedItems);
    setFilteredItem(updatedItems);
  };

  useEffect(() => {
    if (filterBookmark) {
      setFilteredItem(items.filter((item) => item.saved));
    } else {
      setFilteredItem(items);
    }
  }, [filterBookmark, items]);

  return (
    <section className="flex flex-col gap-y-3 w-full">
      <section className="flex justify-between items-center">
        <ButtonComponent
          onClick={() => {
            setFilteredItem(items);
            setFilterBookmark(false);
          }}
        >
          Back
        </ButtonComponent>

        <section className="flex items-center gap-x-2">
          <BookmarkComponent onToggle={() => setFilterBookmark(true)} />
          <SortComponent onSort={handleSort} />
        </section>
      </section>

      <section className="w-full flex flex-col gap-y-3">
        {filteredItem.map((item) => (
          <CardComponent
            key={item.id}
            item={item}
            onBookMark={handleBookmark}
          />
        ))}
      </section>
    </section>
  );
}
