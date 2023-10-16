import React, { useState } from "react";
import logo from "../Assets/nav_logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import triangle from "../Assets/triangle.svg";
import Signup from "./signup";
import Signin from "./signin";
import Popup from "./popup";
import oval from "../Assets/Oval.svg";
import Path from "../Assets/Path.svg";
import Rectangle from "../Assets/Rectangle.svg";



function Navbar() {
  
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);

  return (
    <div className="navbar">
   <div className="logo">
   <img  src={logo} alt="Logo"  className="logo_img"  />
   </div>
    <div className="searchbar">
    <SearchIcon className="searchIcon" />
       <input  placeholder="Search for your favorite groups in ATG"  className="search"/>
    </div>
   
     <div className="Dropdown">
            <button
              className="Dropbutton"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span style={{ fontSize: "16px" }}>Create account.</span>
              <span
                style={{
                  color: "#2F6CE5",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                It’s free!
                <img
                  style={{
                    margin: "0 0 0 .5rem",
                    height: "1rem",
                    width: "1rem",
                  }}
                  src={triangle}
                  alt=""
                />
              </span>
            </button>
            {open && (
              <div>
                <button
                  className="Dropbutton"
                  onClick={() => {
                    setOpenSignin(true);
                  }}
                >
                  Sign In
                </button>
                <button
                  className="Dropbutton"
                  onClick={() => {
                    setOpenSignup(true);
                  }}
                >
                  Sign Up
                </button>
                
              </div>
            )}
             
          </div>
          <Popup openPopup={openSignup} setOpenPopup={setOpenSignup}>
        <Signup />
      </Popup>
      <Popup openPopup={openSignin} setOpenPopup={setOpenSignin}>
        <Signin />
      </Popup>

      <div className="shapes" >
                <img src ={Rectangle} className="Rectangle" alt="Rectangle"  />
                <img src ={oval} className="oval" alt="oval"  />
                <img src ={Path} className="Path" alt="Path"  />
                
              </div>

    
  </div>

  );
}

export default Navbar