import React from "react";
import Navbar from "./Navbar";
import herobg from "../assets/hero-bg.svg";
import starsvg from "../assets/star.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

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
      <div>
        <hr className="border-[#A3C60FE5]" />
        <div className="running-text-container">
          <div className="running-text flex items-center">
            <span className="text-[#A3C60FE5] hrtxt text-5xl mr-2">
              Experience the Future of Gaming on the Base Chain!
            </span>
            <img src={starsvg} alt="star" className="inline-block mr-2" />
            <span className="text-[#A3C60FE5] hrtxt text-5xl mr-2">
              Dynamic Challenges Await – Are You Ready to Conquer?
            </span>
            <img src={starsvg} alt="star" className="inline-block mr-2" />
            <span className="text-[#A3C60FE5] hrtxt text-5xl mr-2">
              Join Now and Prove Your Skills!
            </span>
            <img src={starsvg} alt="star" className="inline-block mr-2" />
            <span className="text-[#A3C60FE5] hrtxt text-5xl mr-2">
              Experience the Future of Gaming on the Base Chain!
            </span>
            <img src={starsvg} alt="star" className="inline-block mr-2" />
            <span className="text-[#A3C60FE5] hrtxt text-5xl mr-2">
              Dynamic Challenges Await – Are You Ready to Conquer?
            </span>
            <img src={starsvg} alt="star" className="inline-block mr-2" />
            <span className="text-[#A3C60FE5] hrtxt text-5xl mr-2">
              Join Now and Prove Your Skills!
            </span>
            <img src={starsvg} alt="star" className="inline-block mr-2" />
          </div>
        </div>
        <hr className="border-[#A3C60FE5]" />
      </div>
      <div>
        <div className="flex mt-20 justify-between">
          <img src={left} alt="left" className="left" />
          <div>
            <p className="text-center hero2txt ">
              CONQUER THE FUTURE OF GAMING ON THE BASE CHAIN!
            </p>
            <p className="w-[700px] text-[#D6D6D6] herodesc text-center">
              Experience intense multiplayer battles, climb leaderboards for
              exclusive NFT rewards, and enjoy lifelike graphics powered by
              blockchain technology. Enter custom rooms, strategize, and
              dominate countdown-driven challenges for unparalleled gaming
              excitement.
            </p>
          </div>
          <img src={right} alt="right" className="right" />
        </div>
      </div>

      <div>
        <div className="flex mt-20 justify-between">
          <img src={left} alt="left" className="left" />
          <div>
            <p className="text-center hero2txt ">HOW CHAINHUNTER WORKS? </p>
            <p className="w-[700px] text-[#D6D6D6] herodesc text-center">
              Discover the seamless integration of blockchain technology and
              immersive gameplay with Chainhunter. Here’s how you can dive into
              the adventure:{" "}
            </p>
          </div>
          <img src={right} alt="right" className="right" />
        </div>
      </div>

      <div className="bg-[#9FC610] w-full h-6 mt-20" />
    </div>
  );
}

export default Home;
