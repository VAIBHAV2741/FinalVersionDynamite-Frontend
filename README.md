# 🧨 DynamiteTrade

<img width="1897" height="913" alt="Screenshot 2026-02-03 100310" src="https://github.com/user-attachments/assets/562b907b-f1da-4494-823d-b195f6d4265a" />


### [🚀 Live Demo](https://final-version-dynamite-frontend.vercel.app/) • [📂 Backend API](http://localhost:3000) • [🔮 Prediction Engine](https://dynamite-djangomodel.onrender.com/predict/?crypto=solana)

**DynamiteTrade** is a high-performance, institutional-grade stock and cryptocurrency analytics platform. Built with **Next.js 15** and **Tailwind CSS 4**, it delivers real-time market data, AI-driven price predictions, and a proprietary quantitative scoring engine to empower traders with data-backed conviction.

---

## 🌟 Key Pillars

### 1. 🧠 Dynamite Quant Engine
Our proprietary scoring algorithm evaluates assets across six dimensions to provide a unified `BUY`/`HOLD`/`SELL` recommendation:
- **Valuation**: Forward/Trailing PE normalization.
- **Trend**: Price position relative to 52-week High/Low.
- **Momentum**: Volatility-adjusted price change velocity.
- **Volatility**: Intraday range analysis.
- **Market Cap**: Logarithmic size-based weighting.
- **Dividend**: Yield-on-cost evaluation.

### 2. 🔮 AI Predictive Modeling
Deep learning models hosted on Django REST clusters provide real-time price forecasting for major cryptocurrencies and NSE stocks.
- **Crypto**: SOL, BTC, ETH.
- **Stocks**: Top 20 NSE blue-chip stocks.

### 3. 📊 Visual Intelligence
Institutional-grade charting powered by **Highcharts** and **Lightweight Charts**.
- Real-time **Order Book** logs.
- Support/Resistance level identification.
- Volatility-adjusted price action visualization.



---<img width="1878" height="867" alt="Screenshot 2026-02-03 100238" src="https://github.com/user-attachments/assets/286832e6-d2c9-44f0-8df9-45a9bcdd34f5" />


## �️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Aceternity UI, Framer Motion |
| **Backend** | Node.js, Express 5, Yahoo Finance (Data Provider), WebSocket (Live Ticks) |
| **ML/Model** | Python 3.10, Django REST, Pandas, Scikit-Learn |
| **Auth** | Clerk (JWT-based session management) |

---

## 📊 Terminal Dashboard

---![Uploading Screenshot 2026-02-03 100310.png…]()


## ⚡ Setup & Deployment

### Backend
```bash
git clone ...
cd backend
npm install
node index.js
```

### Frontend
```bash
cd frontend/nextjs-auth-starter-template
npm install
npm run dev
```

### Environment Config
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## � License

This project is licensed under the **ISC License**. Built with ❤️ for the trading community.
