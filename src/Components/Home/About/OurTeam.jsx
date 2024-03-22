import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Doc } from "./Doc";

const OurTeam = () => {
  const { img1, img2, img3, img4, img5 } = Doc();
  const data = [
    {
      img: img1,
      name: "Fahad Bin Basher",
      specialties: "Full Stack Developer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      img: img2,
      name: "Borhan Ahmed",
      specialties: "Full Stack Developer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      img: img3,
      name: "Mayin Uddin",
      specialties: "Full Stack Developer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      img: img4,
      name: "Tohirul Islam",
      specialties: "Full Stack Developer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      img: img5,
      name: "Khorshed Ahmed",
      specialties: "Front End Developer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
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
        breakpoint: 1400,
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
    <div className=" bg-[#2f3542] text-white min-h-screen flex flex-col justify-center lg:px-32 px-5 py-5 lg:py-0">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-5 lg:mb-0">
        <div>
          <h1 className=" text-2xl text-[#ffdd00] font-extrabold text-center lg:text-start uppercase">
            experts . .
          </h1>
          <p className="text-white text-4xl font-bold my-2 text-center lg:text-start">
            Meet Our Dedicated Team
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
      <div className=" my-5 ">
        <Slider ref={slider} {...settings} className="flex flex-row gap-10">
          {data.map((people, index) => (
            <div className="p-4 cursor-pointer" key={index}>
              <div className="relative w-[330px] bg-[#171721] cursor-pointer rounded-lg  shadow-lg  hover:shadow-[#ffdd00]
    overflow-hidden py-[26px] px-[20px] flex flex-col gap-[14px]
     transition-all duration-300 ease-in-out hover:translate-y-[10px] hover:brightness-110">
                <div>
                  <img
                    src={people.img}
                    alt="img"
                    className="w-full h-[200px] bg-white rounded shadow-lg shadow-[rgba(0, 0, 0, 0.3)]"
                  />
                </div>
                <div className=" flex flex-col justify-start items-start">
                  <h1 className="font-bold text-2xl text-[#b1b2b3] overflow-hidden text-ellipsis box-content w-full line-clamp-2">
                    {people.name}
                  </h1>
                  <p className="text-sm ml-1 text-[#b1b2b3]">{people.specialties}</p>
                  <p className="text-md text-[#b1b2b3] overflow-hidden mt-2 box-content w-full line-clamp-3 text-ellipsis">{people.desc}</p>

                  <div className="mt-3 flex gap-4 text-gray-400">
                    <a href={people.twitter}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <g clipPath="url(#clip0_17_80)">
                          <path
                            fill="currentColor"
                            d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_80">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href={people.github}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <g fill="currentColor" clipPath="url(#clip0_910_44)">
                          <path
                            fillRule="evenodd"
                            d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                            clipRule="evenodd"
                          />
                          <path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_910_44">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href={people.linkedin}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <g clipPath="url(#clip0_17_68)">
                          <path
                            fill="currentColor"
                            d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_68">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>           
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurTeam;
