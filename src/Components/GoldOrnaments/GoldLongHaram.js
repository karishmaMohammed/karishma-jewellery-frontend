import React from "react";
import "./GoldOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function GoldLongHaram() {
  const longHaramImages = [
    `${PREFIX_URL}goldlongharamNine.jpg`,
    `${PREFIX_URL}goldlongharamSix.jpg`,
    `${PREFIX_URL}goldlongharamThree.jpg`,
    `${PREFIX_URL}goldlongharamFour.jpg`,
    `${PREFIX_URL}goldlongharamFive.jpg`,
    `${PREFIX_URL}goldlongharamTwo.jpg`,
    `${PREFIX_URL}goldlongharamSeven.jpg`,
    `${PREFIX_URL}goldlongharamEight.jpg`,
    `${PREFIX_URL}goldlongharamOne.jpg`,
    `${PREFIX_URL}goldlongharamTen.jpg`,
    `${PREFIX_URL}goldlongharamEleven.jpg`,
    `${PREFIX_URL}goldlongharamTwelve.jpg`,
    `${PREFIX_URL}goldlongharamThirteen.jpg`,
    `${PREFIX_URL}goldlongharamFourteen.jpg`,
    `${PREFIX_URL}goldlongharamFifteen.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Gold Long Haram</span>
        <span>
          "Dive into opulence with our Gold Long Haram collection, where each
          piece harmoniously merges tradition and contemporary allure.
          Meticulously crafted, these harams captivate with their exquisite
          design, offering a captivating blend of artistry and enduring
          elegance."
        </span>
      </div>
      <div className="gold-rings-outer">
        {longHaramImages.map((item, index) => (
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
        <span>Gold Antic Long Haram in Next Page</span>
        <a href="/gold-antic-long-haram">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default GoldLongHaram;
