"use client";

import React from "react";

export default function SearchComponent() {
  return (
    <section className="text-gray-200 font-medium text-xs bg-category w-fit px-6 py-3 rounded-xl border-[0.5px] border-gray-700/50 focus-visible:outline-none">
      <input
        type=""
        name="text"
        id="text"
        placeholder="Search item by name..."
      />
    </section>
  );
}
