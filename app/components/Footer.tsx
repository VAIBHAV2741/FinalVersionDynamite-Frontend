import Link from "next/link";
import { X, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0f1a] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          
          {/* Logo */}
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-red-500">
              <span className="text-sm font-bold text-white">🎒</span>
            </div>
            <span className="text-lg font-semibold text-white">
              Dynamite Trade
            </span>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Help & Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#">Learn</Link></li>
              <li><Link href="#">Guide</Link></li>
              <li><Link href="#">Support</Link></li>
              <li><Link href="#">Documentation</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Learn
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#">Solana Wallet</Link></li>
              <li><Link href="#"> Ethereum Wallet</Link></li>
              <li><Link href="#">Bitcoin Wallet</Link></li>
            </ul>
          </div>

          {/* Token Price */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Token Price
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#">Solana Price</Link></li>
              <li><Link href="#">Bitcoin Price</Link></li>
              <li><Link href="#">Ethereum Price</Link></li>
              <li><Link href="#">Sui Price</Link></li>
              <li><Link href="#">Monad Price</Link></li>
            </ul>
          </div>
        </div>

        {/* Squiggly Divider */}
        <div className="mt-8 flex justify-center">
          <svg width="600" height="20" viewBox="0 0 600 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="squiggly-line opacity-20">
            <path d="M0 10 Q 50 5 100 10 T 200 10 Q 250 15 300 10 T 400 10 Q 450 5 500 10 T 600 10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row">
          
          <div className="text-sm text-gray-500">
            Dynamite Trade © 2026
            <span className="mx-3">·</span>
            <Link href="#" className="hover:text-gray-300">Legal</Link>
            <span className="mx-2">·</span>
            <Link href="#" className="hover:text-gray-300">Privacy</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-gray-400">
            <Link href="#"><X className="h-4 w-4 hover:text-white" /></Link>
            {/* <Link href="#"><Discord className="h-4 w-4 hover:text-white" /></Link> */}
            <Link href="#"><Linkedin className="h-4 w-4 hover:text-white" /></Link>
            {/* <Link href="#"><Reddit className="h-4 w-4 hover:text-white" /></Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
