import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white">MERN STACK DEVELOPER</h2>
            <div className="h-50">
              <lottie-player
                src="https://lottie.host/17791428-cb64-4043-b3da-67a8d413c344/Z7A1phzaYb.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="part2 d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white">MERN STACK DEVELOPER</h2>
            <div className="h-50">
              <lottie-player
                src="https://lottie.host/17791428-cb64-4043-b3da-67a8d413c344/Z7A1phzaYb.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
        <div className="seprator-text">
          <span>HAMBIRTH</span>
        </div>
      </div>
    </>
  );
};

export default Home;
