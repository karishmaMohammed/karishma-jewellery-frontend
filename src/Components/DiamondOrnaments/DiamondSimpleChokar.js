import React from "react";
import "./DiamondOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function DiamondSimpleChokar() {
  const diamondChokarImages = [
    `${PREFIX_URL}simpleDiamondSetTwo.jpg`,
    `${PREFIX_URL}chokar-2.jpg`,
    `${PREFIX_URL}simpleDiamondSetOne.jpg`,
    `${PREFIX_URL}simpleDiamondSetThree.jpg`,
    `${PREFIX_URL}simpleDiamondSetFour.jpg`,
    `${PREFIX_URL}simpleDiamondSetFive.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Diamond Simple Chokars</span>
        <span>
          "Enhance your neckline with our elegant yet simple diamond choker, a
          versatile accessory perfect for any occasion. This understated piece
          effortlessly elevates your look, adding a touch of sparkle to your
          everyday style."
        </span>
      </div>
      <div className="gold-rings-outer">
        {diamondChokarImages.map((item, index) => (
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
        <span>Diamond Bridal Set in Next Page</span>
        <a href="/diamond-bridal-set">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default DiamondSimpleChokar;
