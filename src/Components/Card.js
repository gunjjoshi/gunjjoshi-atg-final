import React from 'react';
import card1 from "../Assets/card1.svg"
import tree_dots from "../Assets/tree_dots.svg"
import sharebtn from "../Assets/share_button.svg"
import views from "../Assets/views.svg"
import share_btn from "../Assets/share_btn.svg"



function Card(props) {
    const {
        name, first_line , second_line ,name_man,card1man,Card_img,date,adress,btn,btn_mbl
       
      } = props;
    return (
      <div className="card">
        <div>
        <img  src={Card_img} alt=""  className="card_img"  /> 
        </div>
      
       <div className="card_content"  >
       <div className="article" > {name}   </div>
       <div className="first_line"  >
       <div className="headline"> {first_line} </div>
        <img  src={tree_dots} alt="tree_dots"  className="tree_dots"  />
       </div>
        <div className="second_line" >{second_line}</div>
        <div className="mid" >
          <div className="date">{date}</div>
          <div className="date">{adress}</div>
        </div>
        <div className="visit_button">
        <img  src={btn} alt=""  className="btn"  />
        <img  src={btn_mbl} alt=""  className="btn_mbl"  />
        </div>
        <div className="last_line" >
            <div className="photo_name" >
            <img  src={card1man} alt="card1man"  className="card1man"  />
        <div className="name_man"  >{name_man}</div>
            </div>
       <div>
           <div className="views_btn">
           <img  src={views} alt="views"  className="views"  />
        <img  src={sharebtn} alt="sharebtn"  className="sharebtn"  />
           </div>
           <div className="share_btn" >
           <img  src={share_btn} alt="views"  className="views"  /> 
           </div>
      
       </div>
       
            </div>
        
    
       </div>
        
        
    </div>
  
    );
  }
  
  export default Card 