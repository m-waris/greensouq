"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function RegisterForm() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, password }),
    });
    if (res.ok) {
      router.push("/auth/signin");
    } else {
      const data = await res.json();
      setError(data.error);
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white">
          <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
          <p className="text-gray-500 mb-6">For {email}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full py-3 px-4 border border-gray-300 rounded-full mb-4 focus:outline-none focus:border-blue-500 text-black"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full py-3 px-4 border border-gray-300 rounded-full mb-4 focus:outline-none focus:border-blue-500 text-black"
              required
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>
      </div>
  );
}
