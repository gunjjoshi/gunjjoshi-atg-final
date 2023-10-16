import React from 'react';
import add_icon from "../Assets/add_icon.svg"
import Dropp from "../Assets/Dropp.svg";





function Mainpage() {
  
    return (
      <div className="mainpage">
        <div className="main_items">
          <div className="titles" > 
     <a  className="titles_active" href="#">All Posts(32)</a>
     <a  className="titles_a" href="#"> Artical </a>
     <a  className="titles_a"  href="#">Event</a>
     <a  className="titles_a"   href="#">Educational </a>
     <a  className="titles_a"    href="#">Job</a>
    
     </div>
     <div className="main_page_buttons"  >
         <button className="writebtn"> Write a Post  </button>
         <button  className="joinbtn"  >   <img  src={add_icon} alt="add_icon" className="add_icon" />   Join Group  </button>
     </div>
          </div>
          <hr className="mainpage_hr" />
          <div className="postcnt">
        <div>Posts(368)</div>
        <button className="filterbtn">Filter: All <img
                  style={{
                   
                  }}
                  src={Dropp}
                  alt=""
                /></button>
        </div>    
     
    </div>
   
   

  
    );
  }
  
  export default Mainpage