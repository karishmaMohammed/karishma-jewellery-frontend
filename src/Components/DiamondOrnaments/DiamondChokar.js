import React from "react";
import "./DiamondOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function DiamondChokar() {
  const diamondChokarImages = [
    `${PREFIX_URL}chokarInRouteTwo.jpg`,
    `${PREFIX_URL}chokarInRouteOne.jpg`,
    `${PREFIX_URL}chokarInRouteThree.jpg`,
    `${PREFIX_URL}chokarInRouteFour.jpg`,
    `${PREFIX_URL}singleChokarDiamondTwo.jpg`,
    // `${PREFIX_URL}chokar-2.jpg`,
    `${PREFIX_URL}chokar-3.jpg`,
    `${PREFIX_URL}singleChokarDiamondOne.jpg`,
    `${PREFIX_URL}chokar-1.jpg`,
    `${PREFIX_URL}singleChokarDiamondThree.jpg`,
    `${PREFIX_URL}singleChokarDiamondFour.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Diamond Chokars</span>
        <span>
          "Upgrade your look with our stunning diamond choker, a stylish piece
          that adds a touch of class to any outfit. It's a beautiful way to
          stand out and enhance your everyday style with ease."
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
        <span>Diamond Simple Chokar in Next Page</span>
        <a href="/diamond-simple-chokar">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default DiamondChokar;
