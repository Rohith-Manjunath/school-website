import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { carouselData } from "../data/carouselData";
import Button from "./Button";

const Carousel = () => {
  let slickSlider;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed for smoother transitions
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Adjust the autoplay speed for smoother transitions
  };

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 px-3 text-white m-4 text-4xl font-bold z-10 rounded-full"
    >
      &#11166;
    </button>
  );
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 px-3 text-white m-4 text-4xl font-bold z-10 rounded-full"
    >
      &#11164;
    </button>
  );

  return (
    <div className="text-[#01416f]">
      <Slider
        ref={(slider) => (slickSlider = slider)}
        {...settings}
        className=""
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
      >
        {carouselData.map((item) => {
          return (
            <div className="slide" key={item.id}>
              <div
                className="w-full h-[30rem] bg-cover bg-center flex items-center justify-start p-[2rem] md:p-[4rem]"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="text-white text-left flex flex-col gap-6 w-full md:w-[60%] h-auto ml-0 md:ml-[2rem] bg-[rgba(211,210,210,0.1)] p-6 md:p-10 rounded-lg">
                  <h1 className="text-2xl md:text-4xl font-bold text-white">
                    {item.title}
                  </h1>
                  <p className="font-bold tracking-[1px] text-sm md:text-base text-white">
                    {item.description}
                  </p>

                  <Button title="Know More" width="1/2" w="full" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
