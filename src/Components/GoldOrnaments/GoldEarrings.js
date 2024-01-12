import React from "react";
import "./GoldOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function GoldEarrings() {
  const goldEarrings = [
    `${PREFIX_URL}goldAnticEarringsOne.jpg`,
    `${PREFIX_URL}goldAnticEarringsTwo.jpg`,
    `${PREFIX_URL}goldAnticEarringsThree.jpg`,
    `${PREFIX_URL}goldAnticEarringsFour.jpg`,
    `${PREFIX_URL}goldAnticEarringsFive.jpg`,
  ];

  return (
    <div>
      <div className="gold-rings-matter">
        <span>Gold Earrings</span>
        <span>
          "Spanning classic to modern aesthetics, each gold earring embodies
          superb craftsmanship and timeless beauty. Every piece is a testament
          to the artistry that defines enduring elegance."
        </span>
      </div>
      <div className="gold-rings-outer">
        {goldEarrings.map((item, index) => (
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
        <span> Gold Chains in Next Page</span>
        <a href="/gold-chains">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default GoldEarrings;
