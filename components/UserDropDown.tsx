"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropDown = () => {
  const router = useRouter();
  const handleSignOut = () => {
    router.push("/sign-in");
  };
  const user = { name: "John Doe", email: "john.doe@example.com" };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-50 "
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/path/to/avatar.jpg" alt="User Avatar" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className=" hidden md:flex flex-col items-start">
            <span className=" text-base  font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/path/to/avatar.jpg" alt="User Avatar" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className=" flex flex-col">
              <span className=" text-base  font-medium text-gray-400">
                {user.name}
              </span>
              <span className=" text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className=" bg-gray-600" />
        <DropdownMenuItem
          className=" text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors"
          onSelect={handleSignOut}
        >
          <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
          LogOut
        </DropdownMenuItem>
        <DropdownMenuSeparator className=" hidden sm:block bg-gray-600" />
        <nav className=" sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
