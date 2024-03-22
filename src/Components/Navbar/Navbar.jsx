import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };


  return (
    <div className="sticky z-10 w-full text-[#ffdd00] bg-[#2f3542] shadow-lg">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="/" spy={true} smooth={true} duration={500}>
              <h1 className=" text-2xl font-semibold">Dark Tech...</h1>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#FFC000] transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#FFC000] transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#FFC000] transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="/projects"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#FFC000] transition-all cursor-pointer"
            >
        Projects
            </Link>
          </nav>

          <div className=" hidden lg:flex">
           <NavLink to='/contact'>
           <button
              className="text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600  px-4 py-2 rounded-md transition duration-300 ease-in-out"
            >
              Contact Us
            </button>
           </NavLink>
           
           
          </div>


          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-slate-500 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#FFC000] transition-all cursor-pointer"
            // onClick={closeForm}

          >
            Home
          </Link>
          <Link
            to="/About"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#FFC000] transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#FFC000] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#FFC000] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <Link
            to="/blogs"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#FFC000] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            to="/faqs"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#FFC000] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Faq
          </Link>

          <div className=" lg:hidden">
            <NavLink to='/contact'>
            <button
              className="bg-base-500 text-white px-4 py-2 rounded-md hover:bg-[#FFC000] transition duration-300 ease-in-out"
            >
              Contact Us
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;