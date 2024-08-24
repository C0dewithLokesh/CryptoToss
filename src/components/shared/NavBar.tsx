import ConnectWallet from "./wallet/ConnectWallet";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-full py-5">
      <p className="text-[#171717] font-bold text-[25px]">
        Crypto<span className="text-[#ffde4d]">Toss</span>
      </p>
      <ConnectWallet />
    </nav>
  );
};

export default NavBar;
