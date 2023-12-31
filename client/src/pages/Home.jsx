import React from "react";
import Carousel from "../components/Carousel";
import Welcome from "../components/Welcome";
import WhatAreWe from "../components/WhatAreWe";
import Reason from "../components/Reason";
import NewsAndEvents from "../components/NewsAndEvents";
import Schedule from "../components/Schedule";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import VirtualTour from "../components/VitualTour";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Welcome />
      <WhatAreWe />
      <VirtualTour />
      <Reason />
      <NewsAndEvents />
      <Schedule />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
