import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Error from "./pages/error.jsx";
import Blog from "./pages/blog";
import FAQ from "./pages/faq";
import About from "./pages/about";
import Destination from "./pages/destination";
import Contact from "./pages/contact";
import Hero from "./pages/hero";
import PrivacyPolicy from "./pages/privacyPolicy.jsx";
import VisaRequirements from "./pages/visaRequirements.jsx";
import TourPackages from "./pages/TourPackages.jsx";
import PackageDetails from "./pages/packageDetials.jsx";
import Tour from "./pages/tour.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "destination",
        element: <Destination />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "privacy_policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "destination_details/:id",
        element: <destinationdetails />,
      },
      {
        path: "holiday_packages",
        element: <TourPackages />,
      },
      {
        path: "visa_requirements",
        element: <VisaRequirements />,
      },
      {
        path: "tour_packages/:id",
        element: <Tour />,
      },
      {
        path: "package_details/:id",
        element: <PackageDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
