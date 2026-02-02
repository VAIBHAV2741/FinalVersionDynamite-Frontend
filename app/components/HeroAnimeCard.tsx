// components/HeroAnimeCard.tsx
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

type HeroAnimeCardProps = {
  videoUrl: string;
};

export default function HeroAnimeCard({ videoUrl }: HeroAnimeCardProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black">
      {/* Reduced height ratio */}
      <div className="relative w-full pt-[40%]">
        {/* Background video */}
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content (centered) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-xs font-medium text-green-400 mb-4">
            Live Crypto Markets
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-4">
            Trade Crypto with
            <span className="text-green-400"> Confidence</span>
            <br />
            <span className="text-red-400"> Profit</span> from Every Move
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl text-sm md:text-base text-gray-300 mb-6">
            Track real-time prices, analyze market trends, and trade top
            cryptocurrencies with fast execution and full transparency.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <SignedIn>
              <Link href="/dashboard">
                <button className="rounded-lg bg-green-500 px-8 py-3 text-sm font-semibold text-black hover:bg-green-400 transition">
                  Start Trading
                </button>
              </Link>
              <Link href="/dashboard">
                <button className="rounded-lg border border-red-500/40 px-8 py-3 text-sm font-semibold text-red-400 hover:bg-red-500/10 transition">
                  View Markets
                </button>
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="rounded-lg bg-green-500 px-8 py-3 text-sm font-semibold text-black hover:bg-green-400 transition">
                  Start Trading
                </button>
              </SignInButton>
              <SignInButton mode="modal">
                <button className="rounded-lg border border-red-500/40 px-8 py-3 text-sm font-semibold text-red-400 hover:bg-red-500/10 transition">
                  View Markets
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
}
