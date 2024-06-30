import React, { useState, Suspense } from "react";
import { useDispatch } from "react-redux";
import { setSelectedTime } from "../../slices/authslice";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Link from "next/link";
import { OrbitControls } from "@react-three/drei";

function Lobby() {
  const dispatch = useDispatch();
  const [selectedTime, setSelectedTimeState] = useState(300);

  const handleTimeSelection = (time) => {
    console.log("Dispatching setSelectedTime with time:", time);
    setSelectedTimeState(time);
    dispatch(setSelectedTime(time));
  };

  return (
    <>
      <div className="bg-[url('../assets/lobbybg.svg')] min-h-screen bg-no-repeat bg-cover">
        <div className="flex items-center space-x-11 text-white text-xl mx-20 py-8">
          <div className="flex homeprofilebg px-3 py-2 gap-3 items-center space-x-3">
            <img
              src="https://example.com/profile-pic"
              className="h-20 w-auto"
              alt=""
            />
            <p className="text-4xl lobbyprof">Prashantexe</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://example.com/kills-icon"
              alt=""
              className="h-16 w-auto"
            />
            <p className="text-4xl lobbyprof">415</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://example.com/deaths-icon"
              alt=""
              className="h-16 w-auto"
            />
            <p className="text-4xl lobbyprof">98 +</p>
          </div>
        </div>
        <div className="flex text-white text-2xl font-semibold justify-between mx-20">
          <div>
            <div className="homebox mt-56 px-20 py-14">
              <div className="flex items-center space-x-5">
                <img
                  src="https://example.com/store-icon"
                  alt=""
                  className="h-14 w-auto"
                />
                <p>
                  <Link href="/options" className="text-4xl">
                    Store
                  </Link>
                </p>
              </div>
              <div className="flex items-center my-12 space-x-5">
                <img
                  src="https://example.com/luck-royale-icon"
                  alt=""
                  className="h-16 w-auto"
                />
                <p>
                  <Link href="/optstore" className="text-4xl">
                    Luck Royale
                  </Link>
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <img
                  src="https://example.com/vault-icon"
                  alt=""
                  className="h-16 w-auto"
                />
                <p>
                  <Link href="/Guns" className="text-4xl">
                    Vault
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="root2 mt-32">
            <Suspense fallback={<div>Loading model...</div>}>
              <Canvas camera={{ fov: 75, position: [0, 1, 5] }} shadows>
                <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
                <GLTFModel />
                <OrbitControls target={[0, 1, 0]} />
              </Canvas>
            </Suspense>
          </div>
          <div className="mt-[300px]">
            <div className="flex mapbox px-6 py-3 items-center space-x-5">
              <img
                src="https://example.com/select-map-icon"
                alt=""
                className="h-16 w-auto"
              />
              <p className="text-4xl lobbyprof">Select Map</p>
            </div>
            <div className="">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhLX30N2aeEQt2Iv9xNfAUagS2HOylDbudaDn_uyM3NvtggvfRsS1vtFPFNdsTGoXFrloA-dYaXtJDkztDAc-hxIzsHhI_XcZycIV0Az6fTR8jxGWl2lgd8PQPpLaoZ3KWgTubfv9-x2RfEyqM7mmBq3SoytIX0AH8jKNFgKEw7UeENmC4fERXuwnaA9JA"
                className="h-72 rounded-2xl mt-10 w-auto"
                alt=""
              />
              <div className="absolute    top-[626px]">
                <p className="text-center lobbyprof text-4xl  bg-black bg-opacity-40 py-2 px-[107px]">
                  Bermuda
                </p>
              </div>
            </div>
            <div className="flex justify-between mx-2 items-center mt-5">
              <p
                className={`px-3 text-3xl lobbyprof  cursor-pointer hover:text-black py-1 border rounded-xl ${
                  selectedTime === 300
                    ? "bg-[#9FC610] text-black"
                    : "text-[#9FC610] border-[#9FC610] hover:bg-[#9FC610]"
                }`}
                onClick={() => handleTimeSelection(300)}
              >
                5 min
              </p>
              <p
                className={`px-3 text-3xl lobbyprof cursor-pointer  hover:text-black py-1 border rounded-xl ${
                  selectedTime === 600
                    ? "bg-[#9FC610] text-black"
                    : "text-[#9FC610] border-[#9FC610] hover:bg-[#9FC610]"
                }`}
                onClick={() => handleTimeSelection(600)}
              >
                10 min
              </p>
              <p
                className={`px-3 text-3xl lobbyprof cursor-pointer  hover:text-black py-1 border rounded-xl ${
                  selectedTime === 900
                    ? "bg-[#9FC610] text-black"
                    : "text-[#9FC610] border-[#9FC610] hover:bg-[#9FC610]"
                }`}
                onClick={() => handleTimeSelection(900)}
              >
                15 min
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/game">
                <button className="playbtm px-20 font-semibold py-4 mt-10 text-6xl text-black ">
                  Play!!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const GLTFModel = () => {
  const gltf = useLoader(GLTFLoader, "./models/Character_Soldier.gltf");
  return <primitive object={gltf.scene} position={[0, 1, 0]} castShadow />;
};

export default Lobby;
