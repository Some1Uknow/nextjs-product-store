'use client'
import { useDarkMode } from "./DarkModeContext";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav
      className={`bg-blue-500 p-5 sticky top-0 z-10 ${darkMode ? "bg-blue-900" : ""}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <button className="text-white text-4xl font-semibold">
              Product Store
            </button>
          </Link>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white font-semibold select-none">
              Theme
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={toggleDarkMode}>
                Light ☀️
              </DropdownMenuItem>
              <DropdownMenuItem onClick={toggleDarkMode}>
                Dark 🌑
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
