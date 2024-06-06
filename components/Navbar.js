import { useDarkMode } from "@/pages/DarkModeContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className={`bg-blue-500 p-4 sticky top-0 z-10 ${darkMode ? 'dark' : ''}`}>
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
          <button className="text-white mr-4" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
