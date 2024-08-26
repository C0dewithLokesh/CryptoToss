import { betLoadingState } from "@/store/betState";
import { addTransactionState, selectedCoinState } from "@/store/coinFlip";
import { useRecoilValue } from "recoil";

const Coin = () => {
  const selectedCoin = useRecoilValue(selectedCoinState);
  const transaction = useRecoilValue(addTransactionState);
  const betLoading = useRecoilValue(betLoadingState);
  const transactionLoading = transaction && Object.keys(transaction).length > 0;

  return (
    <div
      className={`flex items-center justify-center relative backface-hidden ${
        transactionLoading || betLoading
          ? "animate-rotateY"
          : "transform-style-3d transition ease-out duration-500"
      } ${selectedCoin === "tail" && "perspective-[10cm]  rotate-180"}`}
      style={{
        transform:
          selectedCoin === "tail" ? "perspective(10cm) rotateY(180deg)" : "",
      }}
    >
      <img src="/head.webp" alt="head" className="w-24 h-24 relative" />
      <img
        src="/tail.webp"
        alt="tail"
        className="w-24 h-24 absolute z-[-1]"
        style={{
          transform: "rotateY(180deg) translateZ(1px)",
        }}
      />
    </div>
  );
};

export default Coin;
