import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../Assets/Logo.svg";
import Drop from "../Assets/Drop.svg";
import Popup from "./Popup";
import Signup from "./Signup";
import Signin from "./Signin";
import oval from "../Assets/Oval.svg";
import Path from "../Assets/Path.svg";
import Rectangle from "../Assets/Rectangle.svg";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);
  return (
    <>
      <nav className="Navbar">
        <div className="NavDiv">
          <h1 className="logo"
            style={{
              fontFamily: "sans-serif",
              margin: "0",
            }}
          >
            <span style={{ color: "#27a365" }}>ATG.</span>
            <span style={{ color: "#5C5D5D" }}>
              W
              <img
                src={Logo}
                style={{ marginBottom: ".8rem" }}
                alt=""
                width="30"
                height="30"
              />
              RLD
            </span>
          </h1>
          <div className="SearchBar">
            <SearchIcon className="searchIcon" />
            <input
              className="Searchtext"
              type="search"
              placeholder="Search for your favorite groups in ATG"
            />
           
          </div>
          <div className="Dropdown">
            <button
              className="Dropbutton"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span style={{ fontSize: "1.6rem" }}>Create account.</span>
              <span
                style={{
                  color: "#2F6CE5",
                  fontWeight: "500",
                  fontSize: "1.6rem",
                }}
              >
                It’s free!
                <img
                  style={{
                    margin: "0 0 .3rem .5rem",
                    height: "1rem",
                    width: "1rem",
                  }}
                  src={Drop}
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
        </div>
        <div className="shapes" >
                <img src ={Rectangle} className="Rectangle" alt="Rectangle"  />
                <img src ={oval} className="oval" alt="oval"  />
                <img src ={Path} className="Path" alt="Path"  />
                
              </div>
      </nav>
      <Popup openPopup={openSignup} setOpenPopup={setOpenSignup}>
        <Signup />
      </Popup>
      <Popup openPopup={openSignin} setOpenPopup={setOpenSignin}>
        <Signin />
      </Popup>
    </>
  );
}
