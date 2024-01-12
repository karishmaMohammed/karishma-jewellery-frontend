import React from "react";
import "./GoldOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function GoldBridalSet() {
  const chokarImages = [
    `${PREFIX_URL}goldcompleteBridalSetEleven.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetSix.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetThree.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetFour.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetFive.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetTwo.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetSeven.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetEight.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetNine.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetTen.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetOne.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetTwelve.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetThirteen.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetFourteen.jpg`,
    // `${PREFIX_URL}goldcompleteBridalSetFifteen.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetSixteen.jpg`,
    `${PREFIX_URL}goldcompleteBridalSetSeventeen.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Gold Complete Bridal Set</span>
        <span>
          "Discover the perfect Gold Complete Bridal Set that brings together
          all the essential pieces for your special day. This stunning set
          includes a necklace, earrings, and matching accessories, ensuring you
          shine with elegance on your special day."
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
        <span> Gold Special Designs in Next Page</span>
        <a href="/some-more">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default GoldBridalSet;
