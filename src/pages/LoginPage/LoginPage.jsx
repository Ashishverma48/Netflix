import "./loginpage.scss";
import logo from "../../assests/netflixlogo.png";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";

export default function LoginPage() {
  const [users, setUsers] = useState([]);

  const [cookie,setCookie,removeCookie] =useCookies() 
  const navigate = useNavigate()
  const [error,setError] = useState('')
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit:values=>{
      for (let user of users){
        console.log(user);
          if(user?.Email==values.Email && user?.Password ==values.Password ){
            setCookie('email',user.Email)
            navigate('/home')
          }
          else{
            setError('Invalid Credentials ! ')
          }
          
      }
    }
  });

  console.log(users);
  useEffect(() => {

    axios.get("http://127.0.0.1:4000/data").then((response) => {
      setUsers(response?.data);
    });
    if (cookie.Email==undefined)(
      navigate('/login')
    )
  },[]);
  return (
    <div className="login-page">
      <div>
        <img src={logo} alt="" />
      </div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="login">
          <h1>Sign In</h1>
          <TextField
            className="username"
            size="100%"
            onChange={formik.handleChange}
            value={formik.values.Email}
            autoFocus
            bgcolor="dander"
            name="Email"
            fullWidth
            id="standard-basic"
            label="Email Address"
            variant="standard"
            type="text"
          />
          <TextField
            className="username"
            size="100%"
            name="Password"
            onChange={formik.handleChange}
            value={formik.values.Password}
            bgcolor="dander"
            fullWidth
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
          <button>Sign In </button>
          <p style={{color:'red'}}>  {error}</p>
          <div className="remember">
            <div>
              <input type="checkbox" name="" id="" />
              <p>Remeember me</p>
            </div>
            <p>Need Help ?</p>
          </div>
          <p>
            New to Netflix ? <Link to="/register">Sign up Now</Link>
          </p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href=""> Learn more.</a>
          </p>
        </div>
      </form>
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
