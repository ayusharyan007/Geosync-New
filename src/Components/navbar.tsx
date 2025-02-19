"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href ={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <Link href ={"/why"}>
        <MenuItem setActive={setActive} active={active} item="Why-Us">
        </MenuItem>
        </Link>
        <Link href ={"/chats"}>
        <MenuItem setActive={setActive} active={active} item="Chat rules">
        </MenuItem>
        </Link>
        
        <Link href ={"/signup"}>
        <MenuItem setActive={setActive} active={active} item="Sign UP">
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
