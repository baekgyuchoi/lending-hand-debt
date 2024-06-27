"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { Loader2 } from "lucide-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Loader2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "/about",
      icon: <Loader2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "/services",
      icon: (
        <Loader2 className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <Loader2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <Loader2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <nav className="relative  w-full">
      <FloatingNav navItems={[]} />
     
    </nav>
  );
}

