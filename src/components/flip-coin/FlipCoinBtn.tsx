import { Button } from "../ui/button";

const FlipCoinBtn = () => {
  return (
    <Button
      variant={"outline"}
      className={`bg-[#433d49] hover:bg-[#433d49] border-[#50464b] py-1 px-7 w-auto h-auto`}
      onClick={() => {}}
    >
      <span className="w-full h-full text-transparent bg-clip-text bg-gradient-to-b from-[#fbff29] to-[#f92d00] text-[39px] leading-[45px] tracking-normal font-bold">
        Flip
      </span>
    </Button>
  );
};

export default FlipCoinBtn;
