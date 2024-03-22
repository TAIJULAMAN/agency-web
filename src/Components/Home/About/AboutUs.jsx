import { HiChevronDoubleRight } from "react-icons/hi";
import img1 from "../../../assets/about/about.jpg";
const AboutUs = () => {
  const technologies = [
    {
      title: "HTML",
    },
    {
      title: "CSS",
    },
    {
      title: "JavaScript",
    },
    {
      title: "Typescript",
    },
    {
      title: "React.js",
    },
    {
      title: "MongoDB",
    },
    {
      title: "MySQL",
    },
    {
      title: "React Native",
    },
    {
      title: "Node.js",
    },
    {
      title: "NextJs",
    },
    {
      title: "ExpressJs",
    },
    {
      title: "TailwindCSS",
    },
    {
      title: "PHP",
    },
    {
      title: "SQL",
    },
    {
      title: "Redux",
    },
    {
      title: "Saas",
    },
    {
      title: "Laravel",
    },
  ];

  return (
    <section className="bg-[#2f3542] text-white min-h-screen flex flex-col justify-center lg:px-32 p-5">
      <div className="mb-5">
        <h1 className=" text-2xl text-[#ffdd00] font-extrabold text-center lg:text-start uppercase">
          A Story about us . .
        </h1>
        <p className="text-white text-4xl font-bold my-2 text-center lg:text-start">
          Want to know about us.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="p-5">
          <p className="text-xl md:text-lg font-medium md:leading-relaxed text-white">
            Dark Tech is a dynamic software solution team, established in 2023
            with a vision to revolutionize the digital landscape. Comprised of
            passionate developers and designers, we are committed to crafting
            innovative solutions that empower businesses to thrive in an
            ever-evolving technological era. Our mission is to harness the power
            of emerging technologies to create bespoke software solutions that
            drive efficiency, productivity, and success for our clients. With a
            focus on collaboration, creativity, and cutting-edge expertise, Dark
            Tech is dedicated to shaping the future of software innovation.
          </p>
          <p className="text-xl md:text-lg font-medium md:leading-relaxed text-white mt-5">
            Empowering businesses through innovation since 2023. Dark Tech -
            Your partner in navigating the digital future.
          </p>
        </div>
        <div className="p-5">
          <img
            src={img1}
            alt="aboutPic"
            className="scale-100 hover:scale-105 duration-200 rounded-xl"
          />
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-white text-4xl font-bold my-2 text-center lg:text-start">
          Here are a few technologies recently we have been working with:{" "}
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
          {technologies.map((e, index) => (
            <div key={index}>
              <h4 className="text-2xl font-semibold flex items-center gap-4">
                <span className="text-[#ffdd00]">
                  <HiChevronDoubleRight />
                </span>
                {e.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
