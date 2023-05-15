import React, { useEffect, useRef, useState } from "react";
import { sliderData } from "../data";
import { useTheme } from "@emotion/react";

const Caraousal = ({ isNonMobile }) => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  let timeout = useRef(null);
  const theme = useTheme();

  const slideLeft = () => {
    setCurrent(current === 0 ? sliderData.length - 1 : current - 1);
  };

  const slideRight = () => {
    setCurrent(current === sliderData.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    timeout.current = autoplay && setTimeout(() => slideRight(), 5000);
  });

  return (
    <div
      className="slider"
      onMouseEnter={() => {
        setAutoplay(false);
        clearTimeout(timeout);
      }}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="slider-wrapper">
        {sliderData.map((image, index) => {
          return (
            <div
              className={
                index === current
                  ? "slider-card slider-card-active"
                  : "slider-card"
              }
              key={index}
            >
              <img className="slider-image" src={image.image} alt="logo" />
            </div>
          );
        })}

        <div
          className="arrow-right"
          style={{ backgroundColor: theme.palette.background.main,color:theme.palette.primary.main }}
          onClick={slideRight}
        >
          &rsaquo;
        </div>
        <div
          className="arrow-left"
          style={{
            backgroundColor: theme.palette.background.main,
            color:theme.palette.primary.main           
          }}
          onClick={slideLeft}
        >
          {" "}
          &lsaquo;
        </div>
        <div className="slider-pagination">
          {sliderData.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination-dot pagination-dot-active"
                    : "pagination-dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Caraousal;
