import React from "react";
import './landinglogin.scss'
import { AiOutlineRight } from "react-icons/ai";
const LandingLogin = () => {
  return (
    <div className="email-login-comp">
       <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
      <div className="emailLogin">
      <input type="text" name="" id="" placeholder="Email Address"/>
      <button>
        Get Started <AiOutlineRight/>
      </button>
    </div>
    </div>
  );
};

export default LandingLogin;
