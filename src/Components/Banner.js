import React from 'react';
import banner from "../Assets/banner.svg"
import arrow from "../Assets/arrow.svg"
import join_btn from "../Assets/join_btn.svg"



function Banner() {
  
    return (
      <div className="banner">
        <div className="join">
        <img  src={arrow} alt="views"  className="views"  /> 
        <img  src={join_btn} alt="views"  className="views"  /> 
        </div>
      
      {/* <img  src={banner} alt="banner"  className="banner"  /> */}
      <div className="banner_heading">
      <h1 className="banner_h1">Computer Engineering</h1>
      <h3>142,765 Computer Engineers follow this</h3>
      </div>
     
    </div>
  
    );
  }
  
  export default Banner