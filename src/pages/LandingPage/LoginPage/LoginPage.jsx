import "./loginpage.scss";
import logo from "../../../assests/netflixlogo.png";
import { TextField } from "@mui/material";
export default function LoginPage() {
  return (
    <div className="login-page">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="login">
        <h1>Sign In</h1>
        <TextField
          className="username"
          size="100%"
          autoFocus
          bgcolor="dander"
          fullWidth
          id="standard-basic"
          label="Email Address"
          variant="standard"
          type="text"
        />
        <TextField
          className="username"
          size="100%"
          autoFocus
          bgcolor="dander"
          fullWidth
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
        />
        <button>Sign In </button>
        <div className="remember">
          <div>
            <input type="checkbox" name="" id="" />
            <p>Remeember me</p>
          </div>
          <p>Need Help ?</p>
        </div>
        <p>
          New to Netflix ? <span>Sign up Now</span>
        </p>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href=""> Learn more.</a>
        </p>
      </div>
      <div className="login-footer">
      <p>
          Question Call <span>000-800-919-1694</span>
        </p>
        <div className="login-footer-link">
          <div>
            <a href="#">FAQ</a>
            <a href="#">Investor Relation</a>
           
          </div>
          <div>
            
            <a href="#">Cookies Preference</a>
            <a href="#">Legal Notice</a>
          </div>
          <div>
           
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </div>
          <div>
           
            <a href="#">Contact us</a>
           
          </div>
        </div>

        <select name="" id="">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
       
      </div>
    </div>
  );
}
