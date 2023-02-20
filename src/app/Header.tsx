"use client";

import "tailwindcss/tailwind.css";
import Link from "next/link";
import Button from "@/components/Button";
import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";

const Header = () => {
  return (
    <header className="border-b-2">
      <div className="grid  justify-around grid-cols-3 gap-8 w-full p-3.5 items-center auto-rows-50px ">
        <div className="flex items-center position:fixed">
          <SideBar />
          <SearchBar />
        </div>
        <div>
          <Link href="/">
            <h1 className="font-serif text-2xl text-center dark:text-white">
              {" "}
              Travel Nation <span className=" font-extrabold">Africa</span>
            </h1>
          </Link>
        </div>

        <div className="flex flex-nowrap   justify-end space-x-4">
          <Button path="/Subscription">SUBSCRIBE FOR $0.25/WEEK</Button>
          <Button path="/Login">Log in</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
