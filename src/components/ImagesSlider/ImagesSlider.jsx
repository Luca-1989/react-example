import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./imagesSlider.css";
import PropTypes from "prop-types";

const ImagesSlider = ({ images, title }) => {
  return (
    <div className="images-slider">
      {title}
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} className="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

ImagesSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
};

export default ImagesSlider;
