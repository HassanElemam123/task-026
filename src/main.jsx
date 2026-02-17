// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./Globals.css";
import Home from './pages/Home/Home.jsx'; 
import About from './pages/About/About.jsx'; 
import Login from './components/Login/Login.jsx'; 
import Signup from './components/Signup/Signup.jsx'; 
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
