import { createBrowserRouter } from "react-router";
import { SiteLayout } from "./layout/SiteLayout";
import { HomePage } from "../pages/HomePage";
import { WorkPage } from "../pages/WorkPage";
import { ProjectPage } from "../pages/ProjectPage";
import { AboutPage } from "../pages/AboutPage";
import { ExperiencePage } from "../pages/ExperiencePage";
import { ContactPage } from "../pages/ContactPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const router = createBrowserRouter([

  {
    element: <SiteLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/work", element: <WorkPage /> },
      { path: "/work/:slug", element: <ProjectPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/experience", element: <ExperiencePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
], { basename: "/tushar.patil" });