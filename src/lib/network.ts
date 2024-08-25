export const switchNetwork = async (
  chainId: string,
  networkDetails?: unknown
) => {
  if (!window.ethereum) return;
  try {
    await window?.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }],
    });
  } catch (error: any) {
    console.log("e", error);
    if (error.code === 4902 && networkDetails) {
      try {
        await window?.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [networkDetails],
        });
      } catch (addError) {
        console.error("Failed to add the network", addError);
      }
    } else {
      console.error("Failed to switch network", error);
    }
  }
};
