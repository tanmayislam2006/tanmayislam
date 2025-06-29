import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import Home from './Home/Home';
import ProjectDetials from "./Home/ProjectDetails.jsx/ProjectDetials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/project/:id',
        Component:ProjectDetials
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
