import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";

import {useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import SignUp from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Errore404 from "./pages/Errore404";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Errore404 />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/signin",
    element: <Signin/>,
  },

  {
    path: "/signup",
    element: <SignUp/>,
  },


  {
    path: "/html",
    element: <HTML />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
)}

export default App;
