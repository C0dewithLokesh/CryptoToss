import HeadTailBtns from "@/components/coin-flip/HeadTailBtns";
import { useState } from "react";
import Coin from "../Coin";

const CoinFlipCard = () => {
  const [selectedCoin, setSelectedCoin] = useState("head");

  return (
    <div
      className="p-[50px] border-[5px] bg-[#414141cc] border-[#ffd100] rounded-[73px] flex flex-col items-center shadow-md shadow-[#ffd10] w-[350px] gap-7"
      style={{
        boxShadow: "inset 0 0 10px #ffd100, 0 0 10px #ffd100",
      }}
    >
      <Coin selectedCoin={selectedCoin} />
      <HeadTailBtns
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
      />
    </div>
  );
};

export default CoinFlipCard;
