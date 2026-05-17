"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Settings,
  Bell,
  Search,
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
        </div>

        <nav className="p-4 space-y-3">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-blue-500 text-white">
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-200 transition">
            <ShoppingCart size={20} />
            Products
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-200 transition">
            <Users size={20} />
            Users
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-200 transition">
            <Settings size={20} />
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Topbar */}
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold">Welcome Back </h1>

          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* Search */}
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-full md:w-80">
              <Search className="text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none ml-2 w-full"
              />
            </div>

            {/* Notification */}
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
              <Bell size={20} />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="text-gray-500">Total Users</h3>
            <h2 className="text-3xl font-bold mt-2">1,245</h2>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="text-gray-500">Products</h3>
            <h2 className="text-3xl font-bold mt-2">320</h2>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="text-gray-500">Orders</h3>
            <h2 className="text-3xl font-bold mt-2">850</h2>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="text-gray-500">Revenue</h3>
            <h2 className="text-3xl font-bold mt-2">$12,500</h2>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white mt-8 rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <p>New user registered</p>
              <span className="text-gray-500">2 min ago</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <p>Product added successfully</p>
              <span className="text-gray-500">10 min ago</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <p>Order completed</p>
              <span className="text-gray-500">30 min ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
