import React from "react";

import { IoTerminal } from "react-icons/io5";

function Navbar() {
  return (
    <div className="container">
      <div className="container">
        <div className="flex gap-x-3 mt-1">
          <div className="flex ml-2">
            {/* title */}
            <h1 className="font-extrabold text-2xl text-green-500">
              Fernando Cássio
            </h1>
          </div>

          <div className="flex">
            {/* icon */}
            <IoTerminal className="flex h-full w-5 items-center text-green-500"/>
          </div>
        </div>
        <div>{/* menu */}</div>
      </div>
    </div>
  );
}

export default Navbar;
