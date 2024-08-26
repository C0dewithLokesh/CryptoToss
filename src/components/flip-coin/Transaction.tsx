import { useTransaction } from "@/hooks/useTransaction";
import { betLoadingState } from "@/store/betState";
import { addTransactionState } from "@/store/coinFlip";
import { Ban, Check, Loader, SquareArrowOutUpRight } from "lucide-react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Coin from "../shared/Coin";

const Transaction = () => {
  const [transaction, setTransaction] = useRecoilState(addTransactionState);
  const [betLoading, setBetLoading] = useRecoilState(betLoadingState);
  const { isConfirmed, isHiding, hasError, etherScanAddress } = useTransaction(
    transaction?.hash,
    transaction?.wait
  );

  useEffect(() => {
    if (isHiding) {
      setTransaction({});
      setBetLoading(true);
    }
  }, [isHiding, setBetLoading, setTransaction]);

  return (
    <div className="flex items-center flex-col justify-between w-full gap-20">
      <p
        className="text-white text-[20px] font-bold leading-[11px] uppercase"
        style={{ textShadow: "0 0 7px #fff" }}
      >
        Coin is flipping...
      </p>

      <Coin />

      {transaction?.hash && (
        <div className="flex items-center gap-2 justify-between w-full">
          {isConfirmed && <Check size={20} color="#ffd100" />}
          {hasError && <Ban size={20} color="red" />}
          {!isConfirmed && !hasError && (
            <Loader size={28} color="#ffd100" className="animate-spin" />
          )}
          <span className="text-xl text-white w-[60%] text-ellipsis overflow-hidden">
            {transaction?.hash}
          </span>
          <a href={etherScanAddress} target="_blank">
            <SquareArrowOutUpRight size={25} color="#fff" />
          </a>
        </div>
      )}

      {betLoading && (
        <p
          className="text-white text-[20px] font-bold leading-[11px] uppercase"
          style={{ textShadow: "0 0 3px #fff" }}
        >
          Bet Result Pending...
        </p>
      )}
    </div>
  );
};

export default Transaction;
