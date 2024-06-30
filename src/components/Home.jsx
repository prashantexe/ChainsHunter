import React from "react";
import Navbar from "./Navbar";
import herobg from "../assets/hero-bg.svg";
import starsvg from "../assets/star.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import icon from "../assets/icon.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import play from "../assets/play.svg";
import g1 from "../assets/g1.svg";
import g2 from "../assets/g2.svg";
import g3 from "../assets/g3.svg";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.svg";
import Link from "next/link";

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
          <Link href="/lobby">
            <button className="playnowbtn">Play Now!!</button>
          </Link>
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
        <div className="flex justify-center mt-10 py-10 gap-10 items-center">
          <div className="text-center   border-x-[0.8px] border-t-[0.2px] p-14 rounded-2xl border-[#C5F404] card1 flex flex-col gap-5 items-center">
            <img src={icon} alt="icon1" className="w-32 h-32" />
            <p className="text-4xl font-bold">Epic PvP Thrills</p>
            <p className="w-96 text-center">
              Battle in intense multiplayer showdowns with unique avatars.
              Outsmart and conquer your opponents to rise to the top.
            </p>
          </div>
          <div className="text-center   border-x-[0.8px] border-t-[0.2px] p-14 rounded-2xl border-[#C5F404] card1 flex flex-col gap-5 items-center">
            <img src={icon1} alt="icon1" className="w-32 h-32" />
            <p className="text-4xl font-bold">Exclusive NFT Rewards</p>
            <p className="w-96 text-center">
              Win exclusive NFTs that commemorate your victories. Collect and
              trade these digital assets to enhance your in-game legacy.{" "}
            </p>
          </div>
          <div className="text-center   border-x-[0.8px] border-t-[0.2px] p-14 rounded-2xl border-[#C5F404] card1 flex flex-col gap-5 items-center">
            <img src={icon2} alt="icon1" className="w-32 h-32" />
            <p className="text-4xl font-bold">Blockchain Realism</p>
            <p className="w-96 text-center">
              Enjoy seamless, lifelike gameplay powered by the Base chain. Every
              move is secure, transparent, and part of a stunning visual
              experience.{" "}
            </p>
          </div>
        </div>
        <div className="flex mt-2 justify-center py-10 gap-10 items-center">
          <div className="text-center  w-[330px]  border-x-[0.8px] border-t-[0.2px] p-16 h-[320px]  rounded-2xl border-[#C5F404] card1 flex flex-col gap-5 items-center">
            <img src={icon3} alt="icon1" className="w-32 h-32" />
            <p className="text-4xl font-bold">Community-driven Evolution</p>
            <p className="w-96 text-center">
              Influence game development and features through community input.
              Join events and collaborate with other players.
            </p>
          </div>
          <div className="text-center  w-[330px]  border-x-[0.8px] border-t-[0.2px] p-16 h-[320px]  border-[#C5F404] card1 flex flex-col gap-5 items-center">
            <img src={icon4} alt="icon1" className="w-32 h-32" />
            <p className="text-4xl font-bold">Real-world </p>
            <p className="w-96 text-center">
              Blend gaming with reality through AR missions and events. Earn
              real-world rewards linked to your in-game achievements.{" "}
            </p>
          </div>
          <div className="text-center  border-x-[0.8px] border-t-[0.2px] p-16 h-[320px]  rounded-2xl border-[#C5F404] card2 flex flex-col gap-5 items-center">
            <p className="text-3xl w-[240px] font-bold">
              Interested in PvP thrills with unique avatars and abilities?
            </p>{" "}
            <img src={icon5} alt="icon1" className="w-32 h-32" />
            <div>
              <Link href="/lobby">
                <img src={play} alt="play" className="play" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex mt-20 justify-between">
          <img src={left} alt="left" className="left" />
          <div>
            <p className="text-center hero2txt ">HOW CHAINHUNTER WORKS? </p>
            <p className="w-[800px] text-[#D6D6D6] herodesc text-center">
              Discover the seamless integration of blockchain technology and
              immersive gameplay with Chainhunter. Here’s how you can dive into
              the adventure:{" "}
            </p>
          </div>
          <img src={right} alt="right" className="right" />
        </div>
      </div>

      <div>
        <div className="flex mt-48 justify-center py-10 gap-10 items-center">
          <div className="flex flex-col items-center">
            <img src={g1} alt="g1" className="absolute -mt-60" />
            <div className="bg-[#A1C80087] flex flex-col justify-center items-center gap-5 h-[260px] rounded-2xl p-14 text-center">
              <p className="text-4xl w-60 text-center font-bold">
                Choose Your Avatar
              </p>
              <p className="w-80 pt-4 text-center">
                Select from diverse avatars with unique abilities to match your
                playstyle.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={g2} alt="g1" className="absolute -mt-60" />
            <div className="bg-[#A1C80087] flex flex-col justify-center items-center gap-5 h-[260px] rounded-2xl p-14 text-center">
              <p className="text-4xl w-60 text-center font-bold">
                Countdown to Chaos{" "}
              </p>
              <p className="w-80 pt-4 text-center">
                Prepare for intense, time-driven challenges that test your
                skills under pressure.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={g3} alt="g1" className="absolute -mt-60" />
            <div className="bg-[#A1C80087] flex flex-col justify-center items-center gap-5 h-[260px] rounded-2xl p-14 text-center">
              <p className="text-4xl w-60 text-center font-bold">
                Enter the Battle Arena{" "}
              </p>
              <p className="w-80 pt-4 text-center">
                Step into the arena and face off against skilled opponents from
                around the world.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-40 justify-center py-10 gap-10 items-center">
          <div className="flex flex-col items-center">
            <img src={g4} alt="g1" className="absolute -mt-60" />
            <div className="bg-[#A1C80087] flex flex-col justify-center items-center gap-5 h-[260px] rounded-2xl p-14 text-center">
              <p className="text-4xl w-60 text-center font-bold">
                Battle for Supremacy{" "}
              </p>
              <p className="w-80 pt-4 text-center">
                Fight your way to the top in epic PvP arenas where only the
                strongest warriors prevail.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={g5} alt="g1" className="absolute -mt-60" />
            <div className="bg-[#A1C80087] flex flex-col justify-center items-center gap-5 h-[260px] rounded-2xl p-14 text-center">
              <p className="text-4xl w-60 text-center font-bold">
                Claim Your NFT Prize{" "}
              </p>
              <p className="w-80 pt-4 text-center">
                Win exclusive digital rewards that reflect your in-game
                achievements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#9FC610] w-full h-6 mt-20" />
    </div>
  );
}

export default Home;
