import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { DocService } from "./DocService";

const Services = () => {
  const { img1, img2, img3, img4, img5 } = DocService();
  const data = [
    {
      img: img1,
      name: "Web Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    },
    {
      img: img2,
      name: "App Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    },
    {
      img: img3,
      name: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    },
    {
      img: img4,
      name: "Wordpress Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    },
    {
      img: img5,
      name: "Software Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    },
    {
      img: img1,
      name: "Ecommerce Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    },
    {
      img: img2,
      name: "Saas Aplication",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className=" bg-[#2f3542] text-white min-h-screen flex flex-col justify-center lg:px-32 px-5">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-2xl text-[#ffdd00] font-extrabold text-center lg:text-start uppercase">
            Services . .
          </h1>
          <p className="text-white text-4xl font-bold my-2 text-center lg:text-start">
            Expert Services Tailored For you
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-white text-[#2f3542] px-4 py-2 rounded-lg active:bg-[#ffdd00]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-white text-[#2f3542] px-4 py-2 rounded-lg active:bg-[#ffdd00]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="my-5">
        <Slider ref={slider} {...settings} className="flex flex-row">
          {data.map((e, index) => (
            <div className="p-4 cursor-pointer" key={index}>
              <div className="relative w-[330px] bg-[#171721] cursor-pointer rounded-lg  shadow-lg  hover:shadow-[#ffdd00]
    overflow-hidden py-[26px] px-[20px] flex flex-col gap-[14px]
     transition-all duration-300 ease-in-out hover:translate-y-[10px] hover:brightness-110">
                <div className="w-full h-60 sm:h-52 md:h-56">
                  <img
                    src={e.img}
                    alt="img"
                    className="w-full h-[200px] bg-white rounded shadow-lg shadow-[rgba(0, 0, 0, 0.3)]"
                  />
                </div>
                <div className=" flex flex-col justify-center items-center">
                  <h1 className="font-bold text-2xl text-[#b1b2b3] overflow-hidden text-ellipsis box-content w-full line-clamp-2">
                    {e.name}
                  </h1>
                  <p className="text-md text-[#b1b2b3] overflow-hidden mt-2 box-content w-full line-clamp-3 text-ellipsis">{e.desc}</p>
                </div>
               <div className="flex justify-center items-center">
               <button className="flex items-center justify-center py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
               </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
