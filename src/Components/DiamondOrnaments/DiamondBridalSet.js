import React from "react";
import "./DiamondOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function DiamondBridalSet() {
  const diamondBridalSetImages = [
    `${PREFIX_URL}set-1.jpg`,
    `${PREFIX_URL}set-2.jpg`,
    `${PREFIX_URL}set-3.jpg`,
    `${PREFIX_URL}set-4.jpg`,
    `${PREFIX_URL}set-5.jpg`,
    `${PREFIX_URL}set-6.jpg`,
    `${PREFIX_URL}set-7.jpg`,
    `${PREFIX_URL}set-8.jpg`,
    `${PREFIX_URL}set-9.jpg`,
    `${PREFIX_URL}set-10.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Diamond Complete Bridal Set</span>
        <span>
          "Dress like a queen on your special day with our Diamond Complete
          Bridal Set, featuring everything you need for a stunning bridal look.
          .This set encompasses a beautiful necklace, complementing earrings,
          and coordinated accessories, guaranteeing you radiate elegance on your
          wedding day"
        </span>
      </div>
      <div className="gold-rings-outer">
        {diamondBridalSetImages.map((item, index) => (
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
        <span> Diamond Special Designs in Next Page</span>
        <a href="/some-more">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default DiamondBridalSet;
