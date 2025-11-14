"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Search,
  Phone,
  User,
  ShoppingCart,
  Menu,
  X,
  MessageSquare,
  ShoppingCartIcon,
  Handbag,
  ArrowDown,
  ArrowDown01,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "../actions/logout";

export function Navbar({
  user,
}: {
  user?: { name?: string | null; email?: string | null };
}) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#a1d132] sticky top-0 z-50">
      {/* ── Top row ─────────────────────────────────────── */}
      <div className="px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-4 md:gap-6">
          {/* Hamburger (mobile) */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/greensouq-logo.avif"
              alt="GreenSouq"
              width={180}
              height={50}
              className="h-8 md:h-12 w-auto"
            />
          </Link>

          {/* Search – hidden on very small screens */}
          <div className="flex h-12">
            <div className="hidden xl:flex items-center flex-1 h-full">
              <Button
                variant="outline"
                className="bg-gray-200 border-0 rounded-none h-full"
              >
                All categories <ChevronDown className="ml-2 h-4 w-4" />
              </Button>

              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 px-4 py-2 h-full bg-white text-black placeholder-gray-400 border-0 outline-none"
              />
            </div>
            <div className="flex-1">
              <Button className="bg-transparent xl:bg-black text-black xl:text-white  rounded-none px-6 h-full">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right side – phone + account + cart */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Phone – hidden on mobile */}
            <div className="hidden md:flex items-center gap-2 text-black">
              <MessageSquare className="h-5 w-5" />
              <div className="text-sm">
                <div className="font-bold">+971 58 512 1105</div>
                <div>info@greensouq.com</div>
              </div>
            </div>

            {/* USER / LOGIN */}
            <div className="hidden sm:block">
              {user ? (
                <form action={logout} className="w-full">
                  <Button
                    type="submit"
                    variant="ghost"
                    className="flex cursor-pointer text-sm"
                  >
                    <User className="h-5 w-5" />
                    <div className=" flex flex-col text-xs sm:text-sm">
                      <span>{user.name?.split(" ")[0]}</span>
                      <span>Logout</span>
                    </div>
                  </Button>
                </form>
              ) : (
                <Link href="/auth/signin" className="flex gap-1">
                  <User className="h-5 w-5" />
                  Login
                </Link>
              )}
            </div>

            {/* Cart */}
            <Button variant="ghost">
              <Handbag className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* ── Bottom navigation (desktop) ─────────────────────── */}
      <div className="hidden lg:flex px-6 py-3 items-center justify-center overflow-auto">
        {/* placeholder nav items */}
        {[
          "Indoor Plants",
          "Outdoor Plants",
          "Soil & Stones",
          "Fertilizer & Pesticides",
          "Pots & Planters",
          "Seeds",
          "Hydroponics",
          "Garden Services",
          "Plant Talk",
        ].map((label) => (
          <Button key={label} variant="ghost" className="">
            {label}
            <ChevronDown />
          </Button>
        ))}
      </div>

      {/* ── Mobile sidebar ─────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto">
          {/* User row (mobile) */}
          {user ? (
            <form action={logout} className="flex p-6 border-b cursor-pointer">
              <Button
                type="submit"
                variant="ghost"
                className="flex flex-col items-start p-0 m-0"
              >
                <div className="text-gray-600">{user.name ?? "User"}</div>
                <div className="text-sm">Logout</div>
              </Button>
            </form>
          ) : (
            <div className="p-6 border-b">
              <Link href="/auth/signin" className=" flex gap-2">
                <User className="h-5 w-5" />
                Login
              </Link>
            </div>
          )}

          {/* Mobile nav items */}
          <div className="divide-y">
            {[
              "Indoor Plants",
              "Outdoor Plants",
              "Soil & Stones",
              "Fertilizer & Pesticides",
              "Pots & Planters",
              "Seeds",
              "Hydroponics",
              "Garden Services",
              "Plant Talk",
            ].map((label) => (
              <button
                key={label}
                className="w-full text-left p-6 font-medium hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
