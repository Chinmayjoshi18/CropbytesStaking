import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [account, setAccount] = useState(null);
  const [cbxBalance, setCbxBalance] = useState("0");
  const [usdtBalance, setUsdtBalance] = useState("0");
  const [cbxAmount, setCbxAmount] = useState("0");
  const [usdtAmount, setUsdtAmount] = useState("0");

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
    } else {
      alert("MetaMask is required to use this feature");
    }
  };

  const getBalances = async () => {
    if (!account) return;
    // Dummy logic for balance fetching (replace with contract calls)
    setCbxBalance("100");
    setUsdtBalance("500");
  };

  useEffect(() => {
    if (account) getBalances();
  }, [account]);

  const handleTrade = async (type) => {
    if (!account) return alert("Connect wallet first");
    if (type === "buy") {
      alert(`Buying ${usdtAmount} USDT worth of CBX`);
    } else {
      alert(`Selling ${cbxAmount} CBX for USDT`);
    }
    // Replace with smart contract interactions
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold">CBX Trading & Staking</h1>
      <button 
        onClick={connectWallet} 
        className="bg-blue-500 px-4 py-2 rounded-lg mt-4"
      >
        {account ? `Connected: ${account.substring(0, 6)}...` : "Connect Wallet"}
      </button>
      <div className="mt-6">
        <h2>Your Balances</h2>
        <p>CBX: {cbxBalance}</p>
        <p>USDT: {usdtBalance}</p>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <div>
          <input
            type="number"
            placeholder="Amount of USDT"
            className="text-black p-2"
            onChange={(e) => setUsdtAmount(e.target.value)}
          />
          <button 
            onClick={() => handleTrade("buy")} 
            className="bg-green-500 px-4 py-2 rounded-lg ml-2"
          >Buy CBX</button>
        </div>
        <div>
          <input
            type="number"
            placeholder="Amount of CBX"
            className="text-black p-2"
            onChange={(e) => setCbxAmount(e.target.value)}
          />
          <button 
            onClick={() => handleTrade("sell")} 
            className="bg-red-500 px-4 py-2 rounded-lg ml-2"
          >Sell CBX</button>
        </div>
      </div>
    </div>
  );
}
