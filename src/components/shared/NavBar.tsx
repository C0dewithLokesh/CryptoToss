import { Wallet } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-full py-5">
      <p className="text-[#171717] font-bold text-[25px]">Crypto<span className="text-[#ffde4d]">Toss</span></p>
      <PrimaryButton title="Connect Wallet" icon={<Wallet size={25} />} />
    </nav>
  );
};

export default NavBar;
