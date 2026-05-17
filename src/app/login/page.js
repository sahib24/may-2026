"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/dashboard");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-100"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button className="w-full bg-black text-white py-3 rounded">
          Login
        </button>

        <p className="text-sm mt-4 text-center">Email: admin@gmail.com</p>

        <p className="text-sm text-center">Password: 123456</p>
      </form>
    </div>
  );
}
