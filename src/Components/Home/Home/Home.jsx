import Contact from "../../Contact/Contact";
import AboutUs from "../About/AboutUs";
import OurTeam from "../About/OurTeam";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
    return (
        <div>
            <Banner/>
           <AboutUs/>
           <WhyUs/>
           <Services/>
           <OurTeam/>
           <Testimonial/>
           <Contact/>
        </div>
    );
};

export default Home;