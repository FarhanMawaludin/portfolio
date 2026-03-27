import LandingPage from "@/pages/landing"
import { createBrowserRouter } from "react-router-dom"

// import HomePage from "@/pages/home"
// import About from "@/pages/about"
// import Projects from "@/pages/projects"
// import Contact from "@/pages/contact"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/projects",
//     element: <Projects />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
])