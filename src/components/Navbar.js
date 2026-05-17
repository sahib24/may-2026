"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    router.push("/login");
  };

  return (
    <nav className="bg-black text-white p-4 ">
      <div className="">
        {" "}
        <div className="flex  justify-between ">
          <div className="text-2xl font-bold">
            <Link href="/">Logo</Link>
          </div>

          <div className="flex gap-8 ">
            {" "}
            <Link href="/" className="hover:text-red-600">
              Home
            </Link>
            <Link href="/dashboard" className="hover:text-red-600">
              Dashboard
            </Link>
            <Link href="/products" className="hover:text-red-600">
              Products
            </Link>
            <Link href="/profile" className="hover:text-red-600">
              Profile
            </Link>{" "}
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-1 rounded cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
