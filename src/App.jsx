import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import ServicePage from "./Components/ServicePage/ServicePage";
import ManpowerServices from "./Components/ServicePage/ManpowerServices/ManpowerServices";
import InternationalNursing from "./Components/ServicePage/InternationalNursing/InternationalNursing";
import HouseKeepingGDASecurity from "./Components/ServicePage/HouseKeepingGDASecurity/HouseKeepingGDASecurity";
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import BlogPage from './Components/BlogsPage/BlogPage';
import AppLayout from "./Components/AppLayout/AppLayout"; 



const App = () => {
  const rout = [
    {
      path: "/",
      element: <AppLayout />,
      children: [

        
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact-us",
          element: <ContactPage />,
        },
        {
          path: "/privacy-Policy",
          element: <PrivacyPolicy />,
        },
        {
          path : "/ServicePage",
          element : <ServicePage />
        },
        {
          path : "/services/HouseKeepingGDASecurity",
          element : <HouseKeepingGDASecurity/>,
        },
        {
          path : "/services/InternationalNursing",
          element : <InternationalNursing/>,
        },
        {
          path : "/services/ManpowerServices",
          element : <ManpowerServices/>,
        },
        {
          path : "/BlogPage",
          element : <BlogPage />
        }
      ],
    },
  ];

  const router = createBrowserRouter(rout);
  return <RouterProvider router={router} />;
};

export default App;
