import React from "react";
import "./DiamondOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function DiamondChains() {
  const diamondChains = [
    `${PREFIX_URL}diamondchainOne.jpg`,
    `${PREFIX_URL}diamondchainTwo.jpg`,
    `${PREFIX_URL}diamondchainThree.jpg`,
    `${PREFIX_URL}diamondchainFour.jpg`,
    `${PREFIX_URL}diamondchainFive.jpg`,
    `${PREFIX_URL}diamondchainSix.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Diamond Chains</span>
        <span>
          "Enhance your elegance with our exquisite diamond chains that
          effortlessly blend luxury and sophistication. These timeless pieces
          are the perfect addition to any outfit, bringing a touch of sparkle
          and refinement to your everyday style."
        </span>
      </div>
      <div className="gold-rings-outer">
        {diamondChains.map((item, index) => (
          <>
            <div className="gold-rings-inner" key={index}>
              <Tilt
                style={{ borderRadius: "25px" }}
                tiltReverse={true}
                tiltMaxAngleX={30}
                tiltMaxAngleY={30}
                glareEnable={true}
              >
                <img src={item} alt="" />
              </Tilt>
            </div>
          </>
        ))}
      </div>
      <div className="moving-to-next-page">
        <span>Diamond Bangles in Next Page</span>
        <a href="/diamond-bangles">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default DiamondChains;
