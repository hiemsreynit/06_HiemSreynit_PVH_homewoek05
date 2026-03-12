import React from "react";
import SearchComponent from "./SearchComponent";
import Image from "next/image";

export default function NavbarComponent() {
  return (
    <nav className="flex justify-between items-center bg-bar py-2 px-2">
      <section className="flex gap-x-1 items-center">
        <Image unoptimized src="https://i.pinimg.com/736x/e2/9f/e7/e29fe7edd0e086e0e36e894bfe390e05.jpg"
            alt="profile picture"
            width={50} height={50}
            className="rounded-full border-2 border-gray-300"
        />
        <p className="text-white font-bold text-md">Dashboard</p>
      </section>
      <SearchComponent />
    </nav>
  );
}
