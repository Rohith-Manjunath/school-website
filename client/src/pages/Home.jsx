import React from "react";
import Carousel from "../components/Carousel";
import Welcome from "../components/Welcome";
import WhatAreWe from "../components/WhatAreWe";
import Reason from "../components/Reason";
import NewsAndEvents from "../components/NewsAndEvents";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Welcome />
      <WhatAreWe />
      <Reason />
      <NewsAndEvents />
    </div>
  );
};

export default Home;
