import Link from "next/link";

export default function AlertBanner() {
  return (
    <div
      className="
       fixed top-0 left-0 z-50 p-1 w-full border-b  text-black backdrop-blur"
    >
      <div className="py-2 text-center text-sm ">
        BLOG-<span className="text-blue-600"> Site</span>
      </div>
      <nav>
        <ul className="flex justify-center space-x-4 text-sm font-medium ">
          <li>
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="./about" className="hover:text-blue-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
