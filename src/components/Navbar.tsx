"use client";

import { useRouter } from "next/navigation";

import React from "react";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-[#5C4033] py-4">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h1
            onClick={() => router.push("/")}
            className="text-7xl  hover:cursor-pointer text-[#B87333] font-bold"
          >
            IntoxiQuest
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
