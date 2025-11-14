"use client"
import { signIn } from "next-auth/react"
import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" })
  }

  const handleEmailContinue = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError("Email is required")
      return
    }
    // Check if user exists; if yes, redirect to password page; else to register
    const res = await fetch("/api/check-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
    const data = await res.json()
    if (data.exists) {
      router.push(`/auth/login?email=${email}`) // Password entry page
    } else {
      router.push(`/auth/register?email=${email}`) // Registration page
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white">
        <div className="text-left mb-8">
          <Image src="/greensouq-logo.avif" alt="GeenSouq" width={200} height={46} className="mx-auto mb-6" priority />
          <h2 className="text-2xl font-semibold text-black">Sign in</h2>
          <p className="text-gray-500 mt-2">Choose how you&apos;d like to sign in</p>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 mb-4"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form onSubmit={handleEmailContinue}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full py-3 px-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 text-black"
            required
          />
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
          >
            Continue
          </button>
        </form>

        <div className="text-left mt-6 text-sm">
          <a href="/privacy" className="text-blue-500 hover:underline mr-4">
            Privacy policy
          </a>
          <a href="/terms" className="text-blue-500 hover:underline">
            Terms of service
          </a>
        </div>
      </div>
    </div>
  )
}
