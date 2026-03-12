"use client";

import React, { useState } from "react";
import Image from "next/image";
import DetailButtonComponent from "./DetailButtonComponent";
import { Bookmark } from "lucide-react";

export default function CardComponent({ item, onBookMark }) {
  return (
    <section className="flex justify-between items-center bg-main shadow-[0_0px_2px_0_rgba(0,0,0,0.2)] shadow-gray-300/20 rounded-xl p-2 hover:shadow-[0_0px_4px_0_rgba(0,0,0,0.2)] hover:shadow-gray-300/40">
      <section className="flex items-center gap-x-3">
        <Image
          unoptimized
          src={item.image}
          alt={item.item_description}
          width={80}
          height={80}
          className="rounded-xl"
        />
        <section className="flex flex-col items-start gap-y-2">
          <section className="flex items-center w-fit gap-x-3">
            <p className="text-white font-bold text-sm">
              {item.item_name}Wireless Mouse
            </p>
            <p className="font-light text-sm">{item.item_price} $19.9</p>
            <button onClick={() => onBookMark(item)}>
              {item.saved ? (
                <Bookmark className="fill-yellow-400 text-white" />
              ) : (
                <Bookmark className="text-white" />
              )}
            </button>
          </section>
          <p className="text-sm text-gray-400">{item.item_description}</p>
        </section>
      </section>
      <DetailButtonComponent item={item} />
    </section>
  );
}
