"use client";

import "tailwindcss/tailwind.css";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/solid";

import Button from "@/components/Button";
import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header className="border-b-2 flex mx-1 flex-row justify-around sm:justify-between sm:mx-auto items-center sm:px-28">
      <div className="flex items-center position:fixed">
        <SideBar />
        <SearchBar />
        <Dropdown />
      </div>
      <div>
        <Link href="/">
          <h1 className="font-serif basis-0 text-lg sm:text-2xl text-center dark:text-white">
            Travel Nation <span className="font-extrabold">Africa</span>
          </h1>
        </Link>
      </div>

      <div className="hidden sm:flex flex-nowrap justify-end space-x-4">
        <Button path="/Subscription">SUBSCRIBE FOR $0.25/WEEK</Button>
        <Button path="/Login">Log in</Button>
      </div>

      <UserCircleIcon width="24" height="24" className="sm:hidden" />
    </header>
  );
};

export default Header;
