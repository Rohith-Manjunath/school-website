import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const CustomArrowPrev = ({ onClick, ...rest }) => (
  <div
    onClick={onClick}
    className="custom-arrow prev absolute block z-10 top-1/2 left-0"
  >
    <GrPrevious
      {...rest}
      className="arrow-icon bg-[rgba(0,0,0,0.1)] m-5 p-2 text-4xl rounded-full text-white p-2 hover:cursor-pointer"
    />
  </div>
);

const CustomArrowNext = ({ onClick, ...rest }) => (
  <div
    onClick={onClick}
    className="custom-arrow next absolute block z-10 top-1/2 right-0"
  >
    <GrNext
      {...rest}
      className="arrow-icon bg-[rgba(0,0,0,0.1)] m-5 p-2 text-4xl rounded-full text-white p-2 hover:cursor-pointer"
    />
  </div>
);

const PersonalThoughts = () => {
  return (
    <div className="w-[75%] mx-auto">
      <Carousel
        interval="3000"
        swipeable
        autoPlay
        infiniteLoop
        onSwipeMove
        showArrows
        stopOnHover
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <CustomArrowPrev onClick={() => onClickHandler()} title={label} />
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <CustomArrowNext onClick={() => onClickHandler()} title={label} />
          )
        }
      >
        <div>
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt="Nature 1"
          />
        </div>
        <div>
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt="Nature 2"
          />
        </div>
        <div>
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt="Nature 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default PersonalThoughts;
