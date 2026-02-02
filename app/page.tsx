import Navbar from "./components/Navbar";
 import HeroAnimeCard from "./components/HeroAnimeCard";
 import AboutDynamiteTrade from "./components/AboutDynamiteTrade";
  import CryptoCard from "./components/CryptoCard";
   import Footer from "./components/Footer";
   import { TradingFeatures } from "./components/TradingFeatures";
   import { HowItWorks } from "./components/HowusersTrade";
    export default function Home()
     { return ( <div className="bg-black min-h-screen text-white"> {/* <LandingHero /> <LearnMore cards={CARDS} /> <Footer /> */} <Navbar /> <HeroAnimeCard videoUrl="/HeroVideo.mp4" /> 

<AboutDynamiteTrade />

{/* Stats */}
<div className="px-6 py-8">
  <div className="mx-auto max-w-5xl">
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="rounded-lg border border-white p-4">
        <p className="text-xs text-gray-400">24h Volume</p>
        <p className="mt-1 text-lg font-semibold text-green-400">$1.2B</p>
      </div>

      <div className="rounded-lg border border-white p-4">
        <p className="text-xs text-gray-400">Active Traders</p>
        <p className="mt-1 text-lg font-semibold text-green-400">320K+</p>
      </div>

      <div className="rounded-lg border border-white p-4">
        <p className="text-xs text-gray-400">Top Gainer</p>
        <p className="mt-1 text-lg font-semibold text-green-400">SOL +12%</p>
      </div>

      <div className="rounded-lg border border-white p-4">
        <p className="text-xs text-gray-400">Top Loser</p>
        <p className="mt-1 text-lg font-semibold text-red-400">ETH 4.8%</p>
      </div>
    </div>
  </div>
</div>

<CryptoCard name="Bitcoin" symbol="BTC" price="$30,000" change="+2.5%" isPositive={true} /> <CryptoCard name="Ethereum" symbol="ETH" price="$2,000" change="-1.2%" isPositive={false} /> <CryptoCard name="Soloana" symbol="SOL" price="$5,000" change="-2.2%" isPositive={false} /> <CryptoCard name="Trump Coin" symbol="TCE" price="$4,000" change="-6.2%" isPositive={true} /> 


<TradingFeatures/>
<HowItWorks></HowItWorks>



<Footer/> </div> ); }