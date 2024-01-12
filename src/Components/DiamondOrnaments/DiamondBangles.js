import React from "react";
import "./DiamondOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function DiamondBangles() {
  const ringImages = [
    // diamondBanglesFive.jpg
    `${PREFIX_URL}diamondBanglesOne.jpg`,
    `${PREFIX_URL}diamondBanglesTwo.jpg`,
    `${PREFIX_URL}diamondBanglesThree.jpg`,
    `${PREFIX_URL}diamondBanglesFour.jpg`,
    `${PREFIX_URL}diamondBanglesFive.jpg`,
    `${PREFIX_URL}diamondBanglesSix.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Diamond Bangles</span>
        <span>
          "Grace your wrists with the shimmering beauty of our diamond bangles,
          a perfect blend of sophistication and charm. These timeless
          accessories add a touch of sparkle to any occasion, making them the
          perfect statement piece for your everyday elegance."
        </span>
      </div>
      <div className="gold-rings-outer">
        {ringImages.map((item, index) => (
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
        <span> Diamond Long Haram in Next Page</span>
        <a href="/diamond-long-haram">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default DiamondBangles;
