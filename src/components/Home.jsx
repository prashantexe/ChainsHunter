import React from "react";
import { ConnectButton } from "thirdweb/react";

import { createWallet, walletConnect, inAppWallet } from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
  clientId: "bdf8ac5001cc48ecf7efeec38c34a82f",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  inAppWallet({
    auth: {
      options: ["email", "google", "apple", "facebook", "phone"],
    },
  }),
  createWallet("com.trustwallet.app"),
  createWallet("me.rainbow"),
];

function Home() {
  return (
    <div>
      Home
      <ConnectButton
        client={client}
        wallets={wallets}
        theme={"dark"}
        connectModal={{ size: "compact" }}
      />
    </div>
  );
}

export default Home;
