import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import AboutUs from "../Home/About/AboutUs";
import Blogs from "../Blogs/Blogs";
import Faqs from "../Faqs/Faqs";
import Projects from "../Projects/Projects";
import Services from "../Home/Services/Services";
import Contact from "../Contact/Contact";
import OurTeam from "../Home/About/OurTeam";
import Career from "../Career/Career";
import Terms from "../Terms/Terms";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
              path: "/",
              element: <Home/>
          },
          {
              path: "/about",
              element:<AboutUs/>
          },
          {
            path: "/contact",
            element:<Contact/>
        },
          {
            path: "/services",
            element:<Services/>
        },
          {
            path: "/blogs",
            element:<Blogs/>
        },
          {
            path: "/faqs",
            element:<Faqs/>
        },
        {
          path: "/projects",
          element:<Projects/>
      },
      {
        path: "/team",
        element:<OurTeam/>
    },
    {
      path: "/career",
      element:<Career/>
  },
  {
    path: "/terms",
    element:<Terms/>
}
        ]
      }
]);