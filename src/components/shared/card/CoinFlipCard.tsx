import BetAmount from "@/components/flip-coin/BetAmount";
import FlipCoinBtn from "@/components/flip-coin/FlipCoinBtn";
import HeadTailBtn from "@/components/flip-coin/HeadTailBtn";
import MinMaxBtn from "@/components/flip-coin/MinMaxBtn";
import Coin from "../Coin";

const CoinFlipCard = () => {
  return (
    <div
      className="p-[50px] border-[5px] bg-[#3b3838cc] border-[#ffd100] rounded-[73px] flex flex-col items-center shadow-md shadow-[#ffd10] w-[400px] gap-5"
      style={{
        boxShadow: "inset 0 0 10px #ffd100, 0 0 10px #ffd100",
      }}
    >
      <Coin />

      <p className="text-transparent p-0 bg-clip-text bg-gradient-to-b from-[#fbff29] to-[#f92d00] text-[40px] font-bold">
        x 2.00
      </p>

      <HeadTailBtn />

      <BetAmount />

      <MinMaxBtn />

      <FlipCoinBtn />
    </div>
  );
};

export default CoinFlipCard;
