"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-neutral-800 bg-[#0b0b0c]/90 backdrop-blur-md sticky top-0 z-50 font-inter">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <div className="h-7 w-7 rounded-md bg gradient-to-br from-white/30 to-white/10" />
          Dynamite Trade
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <Link href="#" className="hover:text-white transition">Market</Link>
          <Link href="#" className="hover:text-white transition">Spot</Link>
          <Link href="#" className="hover:text-white transition">Futures</Link>
          <Link href="#" className="hover:text-white transition">Lend</Link>
          <Link href="#" className="hover:text-white transition">About us</Link>
          <Link href="#" className="hover:text-white transition">Contact us</Link>
          <Link href="#" className="hover:text-white transition">More</Link>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center h-9 bg-[#141415] border border-neutral-800 rounded-lg px-3">
          <Search size={16} className="text-neutral-500" />
          <input
            type="text"
            placeholder="Search markets"
            className="ml-2 bg-transparent outline-none text-sm text-neutral-300 w-40 placeholder-neutral-600"
          />
        </div>

        {/* Right: Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <SignedOut>
            <SignUpButton mode="modal">
              <button className="px-4 py-1.5 rounded-md border border-neutral-700 text-neutral-300 text-sm hover:bg-neutral-800 transition">
                Sign up
              </button>
            </SignUpButton>
            <SignInButton mode="modal">
              <button className="px-4 py-1.5 rounded-md bg-white text-black text-sm font-medium hover:bg-neutral-200 transition">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#0b0b0c] border-t border-neutral-800 px-4 py-4 space-y-4 text-neutral-300 text-sm">
          <Link href="#" className="block hover:text-white">Market</Link>
          <Link href="#" className="block hover:text-white">Spot</Link>
          <Link href="#" className="block hover:text-white">Futures</Link>
          <Link href="#" className="block hover:text-white">Lend</Link>
          <Link href="#" className="block hover:text-white">About us</Link>
          <Link href="#" className="block hover:text-white">Contact us</Link>
          <Link href="#" className="block hover:text-white">More</Link>

          <div className="pt-4 flex flex-col gap-2">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="w-full py-2 rounded-md border border-neutral-700 hover:bg-neutral-800 transition">
                  Sign up
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="w-full py-2 rounded-md bg-white text-black font-medium hover:bg-neutral-200 transition">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
}
