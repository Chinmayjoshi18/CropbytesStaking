import { useState } from "react";

export default function StakeBox() {
  const [stakeAmount, setStakeAmount] = useState("");

  const handleStake = () => {
    alert(`Staking ${stakeAmount} CBX`);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <h2 className="text-xl font-bold">Stake CBX</h2>
      <div className="mt-4">
        <input
          type="number"
          placeholder="Amount to Stake"
          className="text-black p-2"
          onChange={(e) => setStakeAmount(e.target.value)}
        />
        <button onClick={handleStake} className="ml-2">Stake</button>
      </div>
    </div>
  );
}
