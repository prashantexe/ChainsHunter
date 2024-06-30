import React from "react";
import Navbar from "./Navbar";
import herobg from "../assets/hero-bg.svg";

function Home() {
  return (
    <div>
      <main className="min-h-screen bg-[url('../assets/bg.png')] bg-cover bg-center relative overflow-hidden">
        <Navbar />
        <div className="text-container">
          <p className="herotxt">
            A New Era &nbsp; &nbsp; &nbsp; &nbsp; Multiplayer
          </p>
          <p className="herotxt">Onchain &nbsp; &nbsp; &nbsp; Adventure</p>
        </div>
        <img src={herobg} alt="Hero Background" className="herobg" />
        <div className="additional-content">
          <p className="highlight-text">Pushing the Limits of Onchain Gaming</p>
          <p className="description-text">
            Immerse yourself in the future of gaming on the Base chain.
            Experience epic PvP battles, earn exclusive NFT rewards, and embrace
            gaming realism like never before.
          </p>
          <button className="playnowbtn">Play Now!!</button>
        </div>
      </main>
    </div>
  );
}

export default Home;
