import { ConnectButton, darkTheme } from "thirdweb/react";
import { createWallet, walletConnect, inAppWallet } from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";
import navicon from "../assets/navicon.png";
import Link from "next/link";

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

const customTheme = darkTheme({
  colors: {
    modalBg: "#FFFFFF",
    primaryText: "black",
    separatorLine: "#FFFFFF",
    borderColor: "#EEEEEE",
    accentText: "#c0ffee",
    connectedButtonBg: "#B9FF09",
    primaryButtonBg: "#B9FF09",
  },
});

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between md:px-32 md:pt-14">
        <div className="flex gap-20">
          <p>How it works</p>
          <p>Marketplace</p>
        </div>
        <img src={navicon} alt="logo" />
        <div className="flex gap-20">
          <Link href="/lobby">
            <button className="bg-[#B9FF09] rounded-full text-3xl px-12 py-5  font-semibold text-black ">
              Play Now!
            </button>{" "}
          </Link>
          <div>
            <ConnectButton
              client={client}
              wallets={wallets}
              theme={customTheme}
              connectModal={{ size: "compact" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
