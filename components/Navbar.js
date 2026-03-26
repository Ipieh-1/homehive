"use client"
import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  const toggleFunction = () => {
    setDropDown(!dropDown);
  }

  return (
    <main className="bg-gray-100 shadow shadow-gray-300 w-full">
      <div className="h-15 px-5 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img
          src="/image.png"
            alt="My logo"
            className="h-15 w-auto"
          />
          <h1 className="text-3xl font-bold text-blue-950">HOMEHIVE</h1>
          </div>
        <ul className="hidden md:flex md:gap-8 text-sm md:font-semibold">
          <Link href="/"><li>Home</li></Link>
          <li>Appartment</li>
          <Link href="/dashboard/add-listing"><li>Add-Listing</li></Link>
          <Link href="/dashboard/profile"><li>Profile</li></Link>
        </ul>

        <Link href="/auth/signin" className="hidden md:block">
          <button className="w-20 h-10 shadow text-white rounded bg-blue-950 cursor-pointer">Sign In</button>
        </Link>

        <div className="block md:hidden">
          <CiMenuFries onClick={toggleFunction} className="text-4xl cursor-pointer" />
        </div>
      </div>

      {dropDown && (
        <div className="flex flex-col gap-2 justify-center items-center md:hidden py-5">
           <ul className="flex flex-col gap-5 text-sm font-semibold">
             <Link href="/"><li>Home</li></Link>
             <li>Appartment</li>
             <Link href="/dashboard/add-listing"><li>Add-Listing</li></Link>
             <Link href="/dashboard/profile"><li>Profile</li></Link>
           </ul>
           <Link href="/auth/signin">
             <div>
               <button className="w-20 h-10 shadow text-white rounded bg-blue-950 cursor-pointer">Sign In</button>
             </div>
           </Link>
        </div>
      )}
    </main>
  );
}