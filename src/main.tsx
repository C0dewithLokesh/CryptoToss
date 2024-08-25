import { metaMask, metaMaskHooks } from "@/lib/connectors.ts";
import { Web3ReactProvider } from "@web3-react/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Web3ReactProvider connectors={[[metaMask, metaMaskHooks]]}>
      <RecoilRoot>
        <App />
        <Toaster />
      </RecoilRoot>
    </Web3ReactProvider>
  </StrictMode>
);
