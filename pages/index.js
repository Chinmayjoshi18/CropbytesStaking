import { useState, useEffect } from "react";
import WalletButton from "../components/WalletButton";
import TradeBox from "../components/TradeBox";
import StakeBox from "../components/StakeBox";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">CBX Trading & Staking</h1>
      
      {/* Connect Wallet Button */}
      <WalletButton />

      {/* Buy/Sell CBX Section */}
      <TradeBox />

      {/* Staking Section */}
      <StakeBox />
    </div>
  );
}