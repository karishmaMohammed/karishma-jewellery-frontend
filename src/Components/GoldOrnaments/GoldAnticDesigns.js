import React from "react";
import "./GoldOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function GoldAnticDesigns() {
  const goldAnticImages = [
    `${PREFIX_URL}anticGoldOrnamentsOne.jpg`,
    `${PREFIX_URL}anticGoldOrnamentsTwo.jpg`,
    `${PREFIX_URL}anticGoldOrnamentsSeven.jpg`,
    `${PREFIX_URL}anticGoldOrnamentsFour.jpg`,
    `${PREFIX_URL}anticGoldOrnamentsFive.jpg`,
    `${PREFIX_URL}anticGoldOrnamentsSix.jpg`,
    `${PREFIX_URL}anticGoldOrnamentsThree.jpg`,
    `${PREFIX_URL}anticGoldOrnamentsEight.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Gold Antic Long Haram</span>
        <span>
          "Step into timeless elegance with our Gold Antique Long Harams, where
          the allure of antiquity meets contemporary sophistication. Each
          intricately designed piece tells a story of heritage, offering a
          captivating blend of vintage charm and modern allure."
        </span>
      </div>
      <div className="gold-rings-outer">
        {goldAnticImages.map((item, index) => (
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
        <span>Gold Chokars in Next Page</span>
        <a href="/gold-chokars">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default GoldAnticDesigns;
