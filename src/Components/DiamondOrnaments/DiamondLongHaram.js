import React from "react";
import "./DiamondOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function DiamondLongHaram() {
  const diamondLongHaram = [
    `${PREFIX_URL}diamondlongharamOne.jpg`,
    `${PREFIX_URL}diamondlongharamTwo.jpg`,
    `${PREFIX_URL}diamondlongharamThree.jpg`,
    `${PREFIX_URL}diamondlongharamFour.jpg`,
    `${PREFIX_URL}diamondlongharamFive.jpg`,
    `${PREFIX_URL}diamondlongharamSix.jpg`,
    `${PREFIX_URL}diamondlongharamSeven.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Diamond Long Haram</span>
        <span>
          "Adorn yourself with the timeless allure of our diamond long haram, a
          versatile piece that effortlessly complements any outfit. This elegant
          accessory adds a touch of glamour to your look, making it the perfect
          choice for both casual and special occasions."
        </span>
      </div>
      <div className="gold-rings-outer">
        {diamondLongHaram.map((item, index) => (
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
        <span> Diamond Chokars in Next Page</span>
        <a href="/diamond-chokar">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default DiamondLongHaram;
