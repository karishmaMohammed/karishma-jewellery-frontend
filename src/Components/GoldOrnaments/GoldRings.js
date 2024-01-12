import React from "react";
import "./GoldOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function GoldRings() {
  const ringImages = [
    `${PREFIX_URL}goldRingOne.jpg`,
    `${PREFIX_URL}goldRingTwo.jpg`,
    `${PREFIX_URL}goldRingThree.jpg`,
    `${PREFIX_URL}goldRingFour.jpg`,
    `${PREFIX_URL}goldRingFive.jpg`,
    `${PREFIX_URL}goldRingSix.jpg`,
    `${PREFIX_URL}goldRingSeven.jpg`,
    `${PREFIX_URL}goldRingEight.jpg`,
    `${PREFIX_URL}goldRingNine.jpg`,
    `${PREFIX_URL}goldRingTen.jpg`,
    `${PREFIX_URL}goldRingEleven.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Gold Rings</span>
        <span>
          "Explore timeless elegance with our meticulously crafted gold rings,
          showcasing enduring allure in classic and modern styles. 
          Each piece is a testament to exquisite craftsmanship,
          symbolizing eternal love or personal style with unparalleled beauty."
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
        <span> Gold Earrings in Next Page</span>
        <a href="/gold-earrings">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default GoldRings;
