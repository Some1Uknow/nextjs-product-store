import { useDarkMode } from "@/pages/DarkModeContext";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav
      className={`bg-blue-500 p-4 sticky top-0 z-10 ${darkMode ? "dark" : ""}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <button
            className="text-white text-3xl font-bold"
            onClick={toggleDarkMode}
          >
            Product Store
          </button>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuItem onClick={toggleDarkMode}>
              Light ☀️
            </DropdownMenuItem>
            <DropdownMenuItem onClick={toggleDarkMode}>
              Dark 🌑
            </DropdownMenuItem>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
