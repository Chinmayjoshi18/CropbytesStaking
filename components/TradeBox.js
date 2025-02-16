import { useState } from "react";

export default function TradeBox() {
  const [cbxAmount, setCbxAmount] = useState("");
  const [usdtAmount, setUsdtAmount] = useState("");

  const handleTrade = (type) => {
    if (type === "buy") {
      alert(`Buying ${usdtAmount} USDT worth of CBX`);
    } else {
      alert(`Selling ${cbxAmount} CBX for USDT`);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">Trade CBX</h2>
      <div className="mt-4">
        <input
          type="number"
          placeholder="Amount of USDT"
          className="text-black p-2"
          onChange={(e) => setUsdtAmount(e.target.value)}
        />
        <button onClick={() => handleTrade("buy")} className="ml-2">Buy CBX</button>
      </div>
      <div className="mt-4">
        <input
          type="number"
          placeholder="Amount of CBX"
          className="text-black p-2"
          onChange={(e) => setCbxAmount(e.target.value)}
        />
        <button onClick={() => handleTrade("sell")} className="ml-2">Sell CBX</button>
      </div>
    </div>
  );
}
