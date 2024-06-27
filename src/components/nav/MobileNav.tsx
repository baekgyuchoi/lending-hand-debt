import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { SideNav } from "./SideNav";

export const MobileNav = () => {
  return (
   
    <Sheet>
        <SheetTrigger className="lg:hidden px-4 ">
            <Menu className="w-10 h-10 text-gray-800"/>
        </SheetTrigger>

        <SheetContent side="right" className="p-0 bg-secondary pt-5 w-32">
            <SheetClose />
            <SideNav />
        </SheetContent>
    </Sheet>

  );
};
