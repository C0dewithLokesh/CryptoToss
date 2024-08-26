import BetAmount from "@/components/flip-coin/BetAmount";
import CollectProfit from "@/components/flip-coin/CollectProfit";
import FlipCoinBtn from "@/components/flip-coin/FlipCoinBtn";
import HeadTailBtn from "@/components/flip-coin/HeadTailBtn";
import MinMaxBtn from "@/components/flip-coin/MinMaxBtn";
import Transaction from "@/components/flip-coin/Transaction";
import { useBetResult } from "@/hooks/useBetResult";
import { useWallet } from "@/hooks/useWallet";
import { addTransactionState } from "@/store/coinFlip";
import { useWeb3React } from "@web3-react/core";
import { useRecoilValue } from "recoil";
import Coin from "../Coin";
import { betLoadingState } from "@/store/betState";

const CoinFlipCard = () => {
  const { account } = useWeb3React();
  const { isValidChain, isActive } = useWallet();
  const transaction = useRecoilValue(addTransactionState);
  const betLoading = useRecoilValue(betLoadingState);

  useBetResult(account!);

  return (
    <div
      className="p-[50px] py-[30px] border-[5px] bg-[#3b3838cc] border-[#ffd100] rounded-[73px] flex flex-col items-center shadow-md shadow-[#ffd10] w-[400px] gap-5"
      style={{
        boxShadow: "inset 0 0 10px #ffd100, 0 0 10px #ffd100",
      }}
    >
      {(transaction && Object.keys(transaction).length > 0) || betLoading ? (
        <Transaction />
      ) : (
        <>
          <Coin />

          <p className="text-transparent p-0 bg-clip-text bg-gradient-to-b from-[#fbff29] to-[#f92d00] text-[40px] font-bold">
            x 2.00
          </p>

          <HeadTailBtn />

          <BetAmount />

          <MinMaxBtn />

          <FlipCoinBtn />

          <p
            className="text-white text-[10px] font-bold leading-[11px] uppercase"
            style={{ textShadow: "0 0 7px #fff" }}
          >
            Flip the coin and win 0.2 Sol
          </p>
          {!isValidChain && isActive && (
            <p
              className="text-red-600 text-[10px] font-bold leading-[11px] uppercase"
              style={{ textShadow: "0 0 7px #fa9292" }}
            >
              Invalid chain, supported chains: Sepolia
            </p>
          )}

          <CollectProfit />
        </>
      )}
    </div>
  );
};

export default CoinFlipCard;
