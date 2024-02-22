import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "./theme.css";

import {useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";


const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const {theme, changeTheme} = useContext(ThemeContext);
  return (
    <div className="myheader">
      <header className="hide-when-mobile ali">
        <h1>
          <Link className="logo" to="/">c4a.dev</Link>
        </h1>

        {/* <button onClick={() => {
          changeTheme(theme === "Light" ? "Dark" : "Light")
        }
        } className="theme-btn">{theme}</button> */}

        <i onClick={() => {
          changeTheme(theme === "Light" ? "Dark" : "Light")
        }} className="fa-solid fa-moon"></i>  
        
        <i onClick={() => {
          changeTheme(theme === "Light" ? "Dark" : "Light")
        }} className="fa-solid fa-sun"></i>


        <ul className="flex">

        


        {!user && <li className="main-list">
            <NavLink className="main-link" to="/signin">
            SigIn
            </NavLink>
        </li>}
        
        
        {!user && <li className="main-list">
            <NavLink className="main-link" to="/signup">
              SignUp
            </NavLink>
        </li>}

        

        
        {user && <li onClick={() => {
          signOut(auth).then(() => {
            console.log("Sign-out successful.")
          }).catch((error) => {
            // An error happened.
          });
        }
        } className="main-list">
            <button className="main-link Sign-out">
              Sign-out
            </button>
        </li>}

        {user && <li className="main-list">
            <NavLink className="main-link" to="/about">
            About
            </NavLink>
        </li>}



          {user &&   <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </li>}
        
            {user && <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li className="mini-projects">
                <a href="">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>}
          
          {user && <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
          </li>}
          
          {user && <li className="main-list">
            <NavLink className="main-link" to="/profile">
            Profile
            </NavLink>
        </li>}
        </ul>
      </header>

    </div>
  );
};

export default Header;
