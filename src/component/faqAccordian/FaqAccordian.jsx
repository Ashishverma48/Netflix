import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import React, { useState } from "react";
import "./faqaccordian.scss";
const FaqAccordian = (props) => {
    const[isActive,setIsActive]=useState(false)
  return (
    <div className="accordian">
      <div onClick={()=>setIsActive(!isActive)} >
        <p>{props.head}</p>
        <span className="plusaccordian">
            {
                isActive ?<AiOutlineMinus /> :<AiOutlinePlus />
            }
          
        </span>
      </div>
     { isActive && <div className="accordianhidecontent" >
    
        <p>{props.para1}</p>
      <p>{props.para2}</p>
   
      </div>
}
    </div>
  );
};

export default FaqAccordian;
