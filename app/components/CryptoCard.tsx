// app/components/CryptoCard.tsx
type CryptoCardProps = {
  name: string;
  symbol: string;
  price: string;
  change: string;
  isPositive?: boolean;
};

export default function CryptoCard({
  name,
  symbol,
  price,
  change,
  isPositive = true,
}: CryptoCardProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3 hover:bg-zinc-800 transition">
      <div>
        <p className="text-sm text-zinc-400">{symbol}</p>
        <p className="text-base font-medium text-white">{name}</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-white">{price}</p>
        <p
          className={`text-sm ${
            isPositive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {change}
        </p>
      </div>
    </div>
  );
}
