import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Sliderlap = () => {
  const images = [
    "https://res.cloudinary.com/dqlx1vyne/image/upload/v1684231293/slider1_a4gref.jpg",
    "https://res.cloudinary.com/dqlx1vyne/image/upload/v1684231892/slider2_ax5ap9.jpg",
    "https://res.cloudinary.com/dqlx1vyne/image/upload/v1684231893/slider3_jt9yuh.jpg",
    "https://res.cloudinary.com/dqlx1vyne/image/upload/v1684231892/slider4_pv0chi.jpg",
    "https://res.cloudinary.com/dqlx1vyne/image/upload/v1684231893/slider5_wjnftm.jpg",
  ];
  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDurationL: 3000,
    infinity: true,
    

    prevArrow: (
      <div className="ml-10 top-50">
        <AiOutlineArrowLeft className="h-8 w-8 text-white bg-gray-400 rounded-full p-1 cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-50">
        <AiOutlineArrowRight className="h-8 w-8 text-white bg-gray-400 rounded-full p-1 cursor-pointer" />
      </div>
    ),
  };

  return (
    <div className="">
      <Zoom {...zoomInProperties}>
        {images.map((item, i) => (
          <div key={i} className=" w-sceen relative">
            <img className="w-screen" src={item} />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Sliderlap;
