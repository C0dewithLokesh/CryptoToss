type ChainInfo = {
  name: string;
  etherScanPrefix: string;
};

export type SupportedChains = {
  [key: number]: ChainInfo;
};