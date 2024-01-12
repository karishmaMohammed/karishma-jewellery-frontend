import React from "react";
import "./GoldOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function GoldChokar() {
  const chokarImages = [
    `${PREFIX_URL}goldChokarFive.jpg`,
    `${PREFIX_URL}frontPageGoldChokarThree.jpg`,
    `${PREFIX_URL}anticGoldOrnamentsSeven.jpg`,
    `${PREFIX_URL}goldChokarOne.jpg`,
    `${PREFIX_URL}frontPageGoldChokarTwo.jpg`,
    `${PREFIX_URL}goldChokarThree.jpg`,
    `${PREFIX_URL}frontPageGoldChokarOne.jpg`,
    `${PREFIX_URL}goldChokarFour.jpg`,
    `${PREFIX_URL}frontPageGoldChokarSix.jpg`,
    `${PREFIX_URL}goldChokarTwo.jpg`,
    `${PREFIX_URL}frontPageGoldChokarFive.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Gold Chokars</span>
        <span>
          "Drape yourself in majestic allure with our Gold Chokers, seamlessly
          fusing refined charm and grandeur. Each choker stands as a masterpiece
          of intricate craftsmanship, adding a touch of royal charm to
          elevate your style."
        </span>
      </div>
      <div className="gold-rings-outer">
        {chokarImages.map((item, index) => (
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
        <span>Gold Bridal Set in Next Page</span>
        <a href="/gold-bridal-set">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default GoldChokar;
