"use client";

import React, { useState } from "react";
import Image from "next/image";
import DetailButtonComponent from "./DetailButtonComponent";
import { Bookmark } from "lucide-react";

export const items = [
  {
    id: 1,
    item_name: "Wireless Mouse",
    item_description:
      "Ergonomic wireless mouse with adjustable DPI and silent clicks.",
    item_price: 19.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    saved: false,
  },
  {
    id: 2,
    item_name: "Mechanical Keyboard",
    item_description:
      "Compact mechanical keyboard with tactile switches and RGB backlight.",
    item_price: 59.5,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    saved: false,
  },
  {
    id: 3,
    item_name: "USB-C Hub",
    item_description:
      "7-in-1 USB-C hub: HDMI, SD card, USB 3.0, and PD charging.",
    item_price: 34.0,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    saved: false,
  },
  {
    id: 4,
    item_name: "Noise Cancelling Headphones",
    item_description:
      "Over-ear ANC headphones with 30-hour battery life and deep bass.",
    item_price: 129.99,
    image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3",
    saved: false,
  },
  {
    id: 5,
    item_name: "Laptop Stand",
    item_description:
      "Aluminum adjustable laptop stand for better posture and airflow.",
    item_price: 24.75,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    saved: false,
  },
  {
    id: 6,
    item_name: "Webcam 1080p",
    item_description:
      "Full HD webcam with auto-focus, built-in mic, and low-light support.",
    item_price: 39.99,
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
    saved: true,
  },
  {
    id: 7,
    item_name: "Apple 1080p",
    item_description:
      "Full HD webcam with auto-focus, built-in mic, and low-light support.",
    item_price: 39.99,
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
    saved: false,
  },
];

export default function CardComponent() {
  return (
    <section className="w-full flex flex-col gap-y-3">
      {items.map((item, index) => (
        <section
          key={index}
          className="flex justify-between items-center bg-main shadow-[0_0px_2px_0_rgba(0,0,0,0.2)] shadow-gray-300/20 rounded-xl p-2 hover:shadow-[0_0px_4px_0_rgba(0,0,0,0.2)] hover:shadow-gray-300/40"
        >
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
                <div>
                  {item.saved ? (
                    <Bookmark className="fill-yellow-400 text-white" />
                  ) : (
                    <Bookmark className="text-white" />
                  )}
                </div>
              </section>
              <p className="text-sm text-gray-400">{item.item_description}</p>
            </section>
          </section>
          <DetailButtonComponent item={item} />
        </section>
      ))}
    </section>
  );
}
