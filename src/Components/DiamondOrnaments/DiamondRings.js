import React from "react";
import "./DiamondOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function DiamondRings() {
  const ringImages = [
    `${PREFIX_URL}diamondRingOne.jpg`,
    `${PREFIX_URL}diamondRingTwo.jpg`,
    `${PREFIX_URL}diamondRingThree.jpg`,
    `${PREFIX_URL}diamondRingFour.jpg`,
    `${PREFIX_URL}diamondRingFive.jpg`,
    `${PREFIX_URL}diamondRingSix.jpg`,
    `${PREFIX_URL}diamondRingSeven.jpg`,
    `${PREFIX_URL}diamondRingEight.jpg`,
    `${PREFIX_URL}diamondRingNine.jpg`,
    `${PREFIX_URL}diamondRingTen.jpg`,
    `${PREFIX_URL}diamondRingEleven.jpg`,
    `${PREFIX_URL}diamondRingTwelve.jpg`,
    `${PREFIX_URL}diamondRingThirteen.jpg`,
  ];

  return (
    <div>
      <div className="gold-rings-matter">
        <span>Diamond Rings</span>
        <span>
          "Find the perfect sparkle for your special moments with our dazzling
          diamond rings. Each ring is a symbol of love and commitment, crafted
          to add a touch of brilliance to your everyday style or celebrate
          significant milestones."
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
        <span> Diamond Earrings in Next Page</span>
        <a href="/diamond-earrings">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default DiamondRings;
