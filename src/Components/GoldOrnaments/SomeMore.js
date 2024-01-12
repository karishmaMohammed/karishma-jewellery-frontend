import React from "react";
import "./GoldOrnaments.css";
import Tilt from "react-parallax-tilt";
import { PREFIX_URL } from "../../contant";

function SomeMore() {
  const specialImages = [
    `${PREFIX_URL}multiSetOne.jpg`,
    `${PREFIX_URL}multiSetTwo.jpg`,
    `${PREFIX_URL}multiSetThree.jpg`,
    `${PREFIX_URL}multiSetFour.jpg`,
    `${PREFIX_URL}multiSetFive.jpg`,
  ];
  return (
    <div>
      <div className="gold-rings-matter">
        <span>Special Designs</span>
        <span>
          "Apart from the designs shown in website there are many more
          collections, we'll provide customization in all ornaments which you
          like the more. Below are some multi usage ornaments."
        </span>
      </div>
      <div className="gold-rings-outer">
        {specialImages.map((item, index) => (
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
        <span> Gold Rings in Next Page</span>
        <a href="/gold-rings">
          <img className="right-arrow" src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
        </a>
        {/* <img className="right-arrow" src={`${ASSETS_URL}leftArrow.png`} alt="" /> */}
      </div>
    </div>
  );
}

export default SomeMore;
