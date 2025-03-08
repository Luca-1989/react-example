import React from "react";
import ImagesSlider from "../components/ImagesSlider/ImagesSlider";
import { Helmet } from "react-helmet";

const About = () => {
  const imagesSlider = [
    "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
    "https://wowslider.com/sliders/demo-18/data1/images/london830775.jpg",
    "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
  ];

  const titleSlider = "Slider Title";

  return (
    <main>
      <Helmet>
        <title>About</title>
        <meta name="description" content="This is the about page" />
      </Helmet>
      <p>This is the about page.</p>
      <ImagesSlider images={imagesSlider} title={titleSlider} />
    </main>
  );
};

export default About;
