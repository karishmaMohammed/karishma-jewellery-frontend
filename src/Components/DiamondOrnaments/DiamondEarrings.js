import React from "react";
import "./DiamondOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function DiamondEarrings() {
  const diamondEarrings = [
    `${PREFIX_URL}diamondearringOne.jpg`,
    `${PREFIX_URL}diamondearringTwo.jpg`,
    `${PREFIX_URL}diamondearringThree.jpg`,
    `${PREFIX_URL}diamondearringFour.jpg`,
    `${PREFIX_URL}diamondearringFive.jpg`,
    `${PREFIX_URL}diamondearringSix.jpg`,
    `${PREFIX_URL}diamondearringSeven.jpg`,
    `${PREFIX_URL}diamondearringEight.jpg`,
    `${PREFIX_URL}diamondearringNine.jpg`,
    `${PREFIX_URL}diamondearringTen.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Diamond Earrings</span>
        <span>
          "Elevate your look with a touch of glamour wearing our stunning
          diamond earrings. Whether it's a casual day or a special occasion,
          these earrings add a sparkling touch to your style, making every
          moment a little more brilliant."
        </span>
      </div>
      <div className="gold-rings-outer">
        {diamondEarrings.map((item, index) => (
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
        <span> Diamond Chains in Next Page</span>
        <a href="/diamond-chains">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default DiamondEarrings;
