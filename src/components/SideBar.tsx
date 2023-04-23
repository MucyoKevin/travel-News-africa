import Link from "next/link";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
const SideBar = () => {
  const [ShouldMenuOpen, setShouldMenuOpen] = useState(false);
  const ShowMenu = () => {
    setShouldMenuOpen(!ShouldMenuOpen);
  };
  const closeMenu = () => {
    setShouldMenuOpen(false);
  };
  return (
    <div className="p-2">
      <Bars3Icon className="h-6 w-6 cursor-pointer" onClick={ShowMenu} />

      <div
        className={
          ShouldMenuOpen
            ? "fixed bg-primary-color list-none top-0 left-0 h-full w-48 text-black py-3 space-y-3 "
            : "hidden"
        }
      >
        <ArrowLeftCircleIcon
          className="h-6 w-6 cursor-pointer absolute top-0 right-0"
          onClick={closeMenu}
        />
        <div className="px-3 flex flex-col flex-wrap ">
          <Link href="#">
            <div className="flex flex-row flex-wrap justify-between text-sm font-semibold mb-2 py-1 px-1 rounded hover:bg-slate-300 cursor-pointer">
              <p>Home Page</p>
            </div>
          </Link>
          <Link href="/about">
            <div className="flex flex-row flex-wrap justify-between text-sm font-semibold mb-2 py-1 px-1 rounded hover:bg-slate-300 cursor-pointer">
              <p>About Us</p>
            </div>
          </Link>
          <Link href='/contact'>
            <div className="flex flex-row flex-wrap justify-between text-sm font-semibold mb-2 py-1 px-1 rounded hover:bg-slate-300 cursor-pointer">
              <p>Contact Us</p>
            </div>
          </Link>
          <div className="flex flex-row flex-wrap justify-between text-sm mb-2 ">
            <Link href="/">Tech</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 inset-y-0 right-0" />
          </div>
          <div className="flex flex-row flex-wrap justify-between text-sm mb-2">
            <Link href="/">Politics</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 top-0 right-0" />
          </div>
          <div className="flex flex-row flex-wrap justify-between text-sm mb-2">
            <Link href="/">Business</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 top-0 right-0" />
          </div>
          <div className="flex flex-row flex-wrap justify-between text-sm mb-2">
            <Link href="/">Life & style</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 top-0 right-0" />
          </div>
          <div className="flex flex-row flex-wrap justify-between text-sm mb-2">
            <Link href="/">Health</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 top-0 right-0" />
          </div>
          <div className="flex flex-row flex-wrap justify-between text-sm mb-2">
            <Link href="/">Sports</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 top-0 right-0" />
          </div>
          <div className="flex flex-row flex-wrap justify-between text-sm mb-2">
            <Link href="/">Opinion</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 top-0 right-0" />
          </div>
          <div className="flex flex-row flex-wrap justify-between text-sm mb-2">
            <Link href="/">Puzzles</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 top-0 right-0" />
          </div>
          <div className="flex flex-row flex-wrap justify-between text-sm mb-2">
            <Link href="/">Countries</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 top-0 right-0" />
          </div>
          <div className="flex flex-row flex-wrap justify-between text-sm mb-1">
            <Link href="/">News</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 top-0 right-0" />
          </div>
          <span className="border-b-2 py-1"></span>

          <div className="flex flex-row flex-wrap justify-between text-sm mb-2 pt-2">
            <Link href="/">Most Popular</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 top-0 right-0" />
          </div>
          <div className="flex flex-row flex-wrap justify-between text-sm mb-2">
            <Link href="/">Top Story</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 top-0 right-0" />
          </div>
          <div className="flex flex-row flex-wrap justify-between text-sm mb-2">
            <Link href="/">Editor's Pick</Link>
            <ChevronRightIcon className="relative inline-flex w-3 h-5 top-0 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
