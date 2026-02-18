import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NavBar = () => {
    const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <img src="/images/Logo.svg" alt="Logo" className="h-8" />
        </div>

          <ul className="hidden md:flex gap-6 font-medium text-[18px]">
            <li className="cursor-pointer ">About Us</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Use Cases</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
     
        <div className="hidden md:block">
          <button className="border border-gray-800 rounded-2xl px-8 py-5 text-xl font-light hover:bg-black hover:text-white transition ease-in">Request a Quote</button>
        </div>

        <div className="md:hidden">
             {open ? (
            <HiOutlineX
              size={28}
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <HiOutlineMenu
              size={28}
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

       {open && (
        <div className="md:hidden flex-col items-center justify-center bg-white border border-gray-800 rounded-md mx-4 my-2 px-8 py-6 space-y-4 font-medium text-sm shadow-md">
          <p className="cursor-pointer">About Us</p>
          <p className="cursor-pointer">Services</p>
          <p className="cursor-pointer">Use Cases</p>
          <p className="cursor-pointer">Pricing</p>
          <p className="cursor-pointer">Blog</p>

          <button className="max-w-xl border border-gray-700 py-2 px-4 rounded-md hover:bg-black hover:text-white transition">
            Request a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
