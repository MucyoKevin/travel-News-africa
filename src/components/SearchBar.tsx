"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

const SearchBar = () => {
  const [Open, setOpen] = useState(false);
  const HandleEvent = () => {
    setOpen(!Open);
  };

  return (
    <div className="p-2 flex flex-row items-center max-h-8">
      <MagnifyingGlassIcon
        className="mx-2 h-5 w-5 cursor-pointer"
        onClick={HandleEvent}
      />
      {Open ? (
        <>
          <input
            type="text"
            placeholder="Search..."
            className={
              "bg-white mx-2 px-3 text-black h-8 border-none outline-none transition-all ease-in-out delay-50 rounded"
            }
          />
          <Button path="">GO</Button>
        </>
      ) : null}
    </div>
  );
};

export default SearchBar;
