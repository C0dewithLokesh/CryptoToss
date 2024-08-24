import { Button } from "../ui/button";

const HeadTailBtns = ({
  selectedCoin,
  setSelectedCoin,
}: {
  selectedCoin: string;
  setSelectedCoin: (coin: string) => void;
}) => {
  return (
    <div className="flex items-center justify-between gap-10 w-[80%]">
      <Button
        variant={"outline"}
        className={`${
          selectedCoin === "head" &&
          "border-[#ffd100] shadow-md shadow-[#ffd100]"
        } bg-[#433d49] hover:bg-[#433d49] border-[#50464b]`}
        onClick={() => setSelectedCoin("head")}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#fbff29] to-[#f92d00] text-[23px]">
          Head
        </span>
      </Button>
      <Button
        variant={"outline"}
        className={`${
          selectedCoin === "tail" &&
          "border-[#ffd100] shadow-md shadow-[#ffd100]"
        } bg-[#433d49] hover:bg-[#433d49] border-[#50464b]`}
        onClick={() => setSelectedCoin("tail")}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#fbff29] to-[#f92d00] text-[23px]">
          Tail
        </span>
      </Button>
    </div>
  );
};

export default HeadTailBtns;
