import Router from "./router";
import ThemeConfig from "./theme";
import { useWeb3React } from '@web3-react/core';
import { useEffect } from "react";
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

// const CoinbaseWallet = new WalletLinkConnector({
//   url: '',
//   appName: 'Premint',
//   supportedChainIds: [1,3,4,5,42]
// });

// const WalletConnect = new WalletConnectConnector({
//   rpcUrl: '',
//   bridge: '',
//   qrcode: true,
// });

const Injected = new InjectedConnector({
  supportedChainIds: [1,3,4,5,42]
});

function App() {
  const { activate, chainId, account, active, library } = useWeb3React();

  useEffect(() => {
    console.log(active)
    if (!active) {
      console.log('hello')
      activate(Injected)
    }
  }, [])

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x63564c40" }],
      });
    } catch (switchError) {
      // 4902 error code indicates the chain is missing on the wallet
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x63564c40",
                rpcUrls: ["https://api.harmony.one"],
                chainName: "Harmony Mainnet",
                nativeCurrency: { name: "ONE", decimals: 18, symbol: "ONE" },
                blockExplorerUrls: ["https://explorer.harmony.one"],
                iconUrls: ["https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png"]
              }
            ],
          });
        } catch (error) {
            console.error(error)
        }
      }
    }
  };
  return (
    <ThemeConfig>
      <Router />
    </ThemeConfig>
  );
}

export default App;
