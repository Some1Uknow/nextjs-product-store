import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  setCurrentPage,
  darkMode,
}) {
  return (
    <>
      <div className="flex justify-center mb-8">
        <div className="flex w-full max-w-md items-center space-x-2">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-black"
          />
          <Button
            type="button"
            onClick={() => setCurrentPage(1)}
            className={`${
              darkMode ? "bg-gray-600 text-white" : "bg-blue-500 text-white"
            }`}
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
}
