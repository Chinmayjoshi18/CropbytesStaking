import { useState } from "react";
import { ethers } from "ethers";

export default function WalletButton() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
    } else {
      alert("MetaMask is required to use this feature");
    }
  };

  return (
    <button onClick={connectWallet} className="mb-6">
      {account ? `Connected: ${account.substring(0, 6)}...` : "Connect Wallet"}
    </button>
  );
}
