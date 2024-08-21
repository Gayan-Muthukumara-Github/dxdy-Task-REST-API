import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/planet" className="text-white hover:text-gray-400">
            Planet
          </Link>
        </li>
        <li>
          <Link href="/ship" className="text-white hover:text-gray-400">
            Ship
          </Link>
        </li>
      </ul>
    </nav>
  );
}
