import React from "react";
import Carousel from "../components/Carousel";
import Welcome from "../components/Welcome";
import WhatAreWe from "../components/WhatAreWe";
import Reason from "../components/Reason";
import NewsAndEvents from "../components/NewsAndEvents";
import Schedule from "../components/Schedule";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Welcome />
      <WhatAreWe />
      <Reason />
      <NewsAndEvents />
      <Schedule />
      <GetInTouch />
    </div>
  );
};

export default Home;
