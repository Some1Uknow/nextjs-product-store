import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link className="text-white text-3xl font-bold" href="/">
            Product Store
          </Link>
        </div>
        <div>
          <Link className="text-white mr-4" href="/">
            Home
          </Link>
          <Link className="text-white" href="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
