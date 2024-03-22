import { useEffect } from "react";
import { TbChevronRight } from "react-icons/tb";

const ScrollButton = () => {
  useEffect(() => {
    const scrollBtn = document.querySelector(".scrollBtn") ;
    window.onscroll = () => {
      scrollFunction();
    };
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollBtn?.addEventListener("click", () => {
      scrollToTop();
    });
  }, []);
  return (
    <div className="w-14 h-14 z-50 text-3xl fixed top-[85vh] right-10 bg-[#2f3542] text-white rounded-full border-[1px] border-[#ffdd00] shadow-cardShadow scrollBtn hidden hover:border-[#ffde] duration-200">
      <button className="w-full h-full flex items-center justify-center relative -rotate-90 ">
        <TbChevronRight />
      </button>
    </div>
  );
};

export default ScrollButton;
