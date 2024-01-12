import React from "react";
import "./GoldOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function GoldChains() {
  const chainImages = [
    `${PREFIX_URL}goldChainOne.jpg`,
    `${PREFIX_URL}goldChainTwo.jpg`,
    `${PREFIX_URL}goldChainThree.jpg`,
    `${PREFIX_URL}goldChainFour.jpg`,
    `${PREFIX_URL}goldChainFive.jpg`,
    `${PREFIX_URL}goldChainSix.jpg`,
    `${PREFIX_URL}goldChainSeven.jpg`,
    `${PREFIX_URL}goldChainEight.jpg`,
    `${PREFIX_URL}goldChainNine.jpg`,
    `${PREFIX_URL}goldChainTen.jpg`,
    // `${PREFIX_URL}goldRingEleven.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Gold Chains</span>
        <span>
          "Elevate your style with our diverse range of gold chains, seamlessly
          blending classic and contemporary designs. Crafted with precision,
          each chain is a symbol of enduring sophistication and timeless
          allure."
        </span>
      </div>
      <div className="gold-rings-outer">
        {chainImages.map((item, index) => (
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
        <span>Gold Bangles in Next Page</span>
        <a href="/gold-bangles">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default GoldChains;
