import pic1 from "../../../assets/img/service.png";
import pic2 from "../../../assets/img/user.png";
import pic3 from "../../../assets/img/wallet.png";
import img from "../../../assets/img/web3.avif";

const WhyUs = () => {
  return (
    <div className="bg-[#2f3542] min-h-screen items-center gap-2  lg:px-32 px-5 pt-10">
      <div className="pt-5 mb-5">
        <h1 className="text-2xl text-[#ffdd00] font-extrabold text-center lg:text-start uppercase">
          Why us . .
        </h1>
        <p className="text-white text-4xl font-bold my-2 text-center lg:text-start">
          Get Ready to Explore, Get Ready to Experience!
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-5">
        <div className="p-5">
          <img
            className="scale-100 hover:scale-105 duration-200  rounded-xl"
            src={img}
            alt="img"
          />
        </div>
        <div className="p-5 flex flex-col justify-between py-10">
          <div className=" flex flex-row gap-5">
            <div className=" flex flex-row items-center w-24">
              <img src={pic1} alt="img" />
            </div>
            <div className=" space-y-3">
              <h1 className=" font-semibold text-xl text-white hover:text-[#ffdd00]">
                Friendly Service
              </h1>
              <p className=" text-white">
                We will provide excellent and friendly service for the sake of
                our customers.
              </p>
            </div>
          </div>
          <div className=" flex flex-row gap-5">
            <div className=" flex flex-row items-center w-24">
              <img src={pic2} alt="img" />
            </div>
            <div className=" space-y-3">
              <h1 className=" font-semibold text-xl text-white hover:text-[#ffdd00]">
                Unforgettable experience
              </h1>
              <p className=" text-white">
                We will provide excellent and Unforgettable experience for the
                sake of our customers.
              </p>
            </div>
          </div>
          <div className=" flex flex-row gap-5">
            <div className="flex flex-row items-center w-24">
              <img src={pic3} alt="img" />
            </div>
            <div className=" space-y-3">
              <h1 className=" font-semibold text-white text-xl hover:text-[#ffdd00]">
                Affordable prices
              </h1>
              <p className=" text-white">
                We will provide excellent and Affordable prices for the sake of
                our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
