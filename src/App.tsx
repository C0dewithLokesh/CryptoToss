import CoinFlipCard from "./components/shared/card/CoinFlipCard";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className="w-full h-full max-w-[1200px] mx-auto flex flex-col items-center">
      <NavBar />
      <div className="w-full flex-1 flex items-center justify-center">
        <CoinFlipCard />
      </div>
    </div>
  );
}

export default App;
