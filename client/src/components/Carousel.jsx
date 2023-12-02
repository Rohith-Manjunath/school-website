import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/images/chairs.jpg";
import Image2 from "../assets/images/football.jpg";
import Image3 from "../assets/images/library.jpg";

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
        <div className="slide">
          <div
            className="w-full h-[30rem] bg-cover bg-center flex items-center justify-start p-[2rem] md:p-[4rem]"
            style={{
              backgroundImage: `url(${Image3})`,
            }}
          >
            <div className="text-white text-left flex flex-col gap-3 w-full md:w-[60%] h-auto ml-0 md:ml-[2rem] bg-[rgba(211,210,210,0.1)] p-6 md:p-10 rounded-lg">
              <h1 className="text-2xl md:text-4xl font-bold text-primary">ABOUT US</h1>
              <p className="font-bold tracking-[1px] text-sm md:text-base text-primary">
                At Mysore International School, we uniquely shape futures
                through academic excellence and holistic development. Join us
                for a transformative journey, empowering students for a
                confident and impactful future.
              </p>

              <button className="btn p-2 rounded-md font-semibold w-[30%] md:w-[20%] bg-[#01416f] text-sm md:text-base">
                Know More
              </button>
            </div>
          </div>
        </div>
        <div className="slide">
          <div
            className="w-full h-[30rem] bg-cover bg-center flex items-center justify-start p-[2rem] md:p-[4rem]"
            style={{
              backgroundImage: `url(${Image2})`,
            }}
          >
            <div className="text-white text-left flex flex-col gap-3 w-full md:w-[60%] h-auto ml-0 md:ml-[2rem] bg-[rgba(211,210,210,0.3)] p-6 md:p-10 rounded-lg">
              <h1 className="text-2xl md:text-4xl font-bold text-primary">OUR TEAM</h1>
              <p className="font-bold tracking-[1px] text-sm md:text-base text-primary">
                At Mysore International School, our committed team nurtures
                academic excellence and personal growth. Meet the passionate
                educators shaping confident global citizens.
              </p>
              <button className="btn p-2 rounded-md font-semibold w-[30%] md:w-[20%] bg-[#01416f] text-sm md:text-base">
                Know More
              </button>
            </div>
          </div>
        </div>
        <div className="slide">
          <div
            className="w-full h-[30rem] bg-cover bg-center flex items-center justify-start p-[2rem] md:p-[4rem]"
            style={{
              backgroundImage: `url(${Image1})`,
            }}
          >
            <div className="text-white text-left flex flex-col gap-3 w-full md:w-[60%] h-auto ml-0 md:ml-[2rem] bg-[rgba(211,210,210,0.1)] p-6 md:p-10 rounded-lg ">
              <h1 className="text-2xl md:text-4xl font-bold text-primary">WE BELIEVE</h1>
              <p className="font-bold tracking-[1px] text-sm md:text-base text-primary">
                At Mysore International School, we believe in the transformative
                power of education. Our commitment is to nurture each student's
                potential, providing a foundation for a brighter, empowered
                future.
              </p>
              <button className="btn p-2 rounded-md font-semibold w-[30%] md:w-[20%] bg-[#01416f] text-sm md:text-base">
                Know More
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
