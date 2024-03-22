import { useState } from "react";
import Slider from "react-slick";
import img1 from '../../../assets/team/d1.jpg'
import img2 from '../../../assets/team/d2.jpg'
import img3 from '../../../assets/team/d3.jpg'
import img4 from '../../../assets/team/d4.jpg'
import img5 from '../../../assets/team/mayin.jpg'


const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          transform: "translate(-50%, 0)",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #F7D449",
              }
            : {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #aeaeae",
              }
        }
      ></div>
    ),
  };
  return (
    <div className="bg-[#2f3542] lg:px-32 px-5">
     <div className="pt-5 mb-5">
        <h1 className="text-2xl text-[#ffdd00] font-extrabold text-center lg:text-start uppercase">
        WHAT our CLIENTS SAY . .
        </h1>
        {/* <p className="text-white text-4xl font-bold my-2 text-center lg:text-start">
        Testimonial
        </p> */}
      </div>
      <section
      id="testimonial"
      className="text-white bg-[#2f3542] py-5 flex justify-center items-center"
    >
      <div className="w-[500px] md:w-[620px] xl:w-[1200px] h-60 px-4">
        <div>
          <Slider {...settings}>
          <section className="py-5">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <figure>
                        <blockquote>
                            <p className="text-white text-xl text-center font-semibold sm:text-2xl">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.“
                            </p>
                        </blockquote>
                        <div className="flex justify-center items-center gap-x-4 mt-6">
                            <img src={img1} className="w-16 h-16 rounded-full" />
                            <div>
                                <span className="block text-white font-semibold">Fahad bin Basher</span>
                                <span className="block text-[#ffdd00] text-sm mt-0.5">Founder of Dark</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
        <section className="py-5">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <figure>
                        <blockquote>
                            <p className="text-white text-xl text-center font-semibold sm:text-2xl">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.“
                            </p>
                        </blockquote>
                        <div className="flex justify-center items-center gap-x-4 mt-6">
                            <img src={img2} className="w-16 h-16 rounded-full" />
                            <div>
                                <span className="block text-white font-semibold">Borhan Ahmed</span>
                                <span className="block text-[#ffdd00] text-sm mt-0.5">Founder of Blue</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
        <section className="py-5">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <figure>
                        <blockquote>
                            <p className="text-white text-xl text-center font-semibold sm:text-2xl">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.“
                            </p>
                        </blockquote>
                        <div className="flex justify-center items-center gap-x-4 mt-6">
                            <img src={img3} className="w-16 h-16 rounded-full" />
                            <div>
                                <span className="block text-white font-semibold">Mayin Uddin</span>
                                <span className="block text-[#ffdd00] text-sm mt-0.5">Founder of Green</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
        <section className="py-5">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <figure>
                        <blockquote>
                            <p className="text-white text-xl text-center font-semibold sm:text-2xl">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.“
                            </p>
                        </blockquote>
                        <div className="flex justify-center items-center gap-x-4 mt-6">
                            <img src={img4} className="w-16 h-16 rounded-full" />
                            <div>
                                <span className="block text-white font-semibold">Al Amin Saifur</span>
                                <span className="block text-[#ffdd00] text-sm mt-0.5">Founder of yellow</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
        <section className="py-5">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <figure>
                        <blockquote>
                            <p className="text-white text-xl text-center font-semibold sm:text-2xl">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.“
                            </p>
                        </blockquote>
                        <div className="flex justify-center items-center gap-x-4 mt-6">
                            <img src={img5} className="w-16 h-16 rounded-full" />
                            <div>
                                <span className="block text-white font-semibold">tohirul Islam</span>
                                <span className="block text-[#ffdd00] text-sm mt-0.5">Founder of Dark</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
        <section className="py-5">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <figure>
                        <blockquote>
                            <p className="text-white text-xl text-center font-semibold sm:text-2xl">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.“
                            </p>
                        </blockquote>
                        <div className="flex justify-center items-center gap-x-4 mt-6">
                            <img src={img1} className="w-16 h-16 rounded-full" />
                            <div>
                                <span className="block text-white font-semibold">khorshed</span>
                                <span className="block text-[#ffdd00] text-sm mt-0.5">Founder of white</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
       
          </Slider>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default Testimonial;