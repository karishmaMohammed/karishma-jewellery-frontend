import React from "react";
import "./GoldOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function GoldBangles() {
  const banglesImages = [
    `${PREFIX_URL}goldBanglesOne.jpg`,
    `${PREFIX_URL}goldBanglesTwo.jpg`,
    `${PREFIX_URL}goldBanglesThree.jpg`,
    `${PREFIX_URL}goldBanglesFour.jpg`,
    `${PREFIX_URL}goldBanglesFive.jpg`,
    `${PREFIX_URL}goldBanglesSix.jpg`,
    `${PREFIX_URL}goldBanglesSeven.jpg`,
    `${PREFIX_URL}goldBanglesEight.jpg`,
    `${PREFIX_URL}goldBanglesNine.jpg`,
    `${PREFIX_URL}goldBanglesTen.jpg`,
    // `${PREFIX_URL}goldRingEleven.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Gold Bangles</span>
        <span>
          "Explore the epitome of style with our collection of gold bangles,
          featuring a harmonious fusion of classic and modern designs. Each
          bangle is meticulously crafted, reflecting unparalleled artistry and a
          distinctive charm that transcends trends."
        </span>
      </div>
      <div className="gold-rings-outer">
        {banglesImages.map((item, index) => (
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
        <span>Gold Long Haram in Next Page</span>
        <a href="/gold-long-haram">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default GoldBangles;
