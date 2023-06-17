import React from "react";
import './landinglogin.scss'
import { AiOutlineRight } from "react-icons/ai";
const LandingLogin = () => {
  return (
    <div className="emailLogin">
      <input type="text" name="" id="" placeholder="Email Address"/>
      <button>
        Get Started <AiOutlineRight/>
      </button>
    </div>
  );
};

export default LandingLogin;
