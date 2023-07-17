import "./registerpage.scss";
import { Link ,useNavigate} from "react-router-dom";
import logo from "../../assests/netflixlogo.png";
import { TextField } from "@mui/material";
import axios from 'axios';
import { useFormik, validateYupSchema } from "formik";

export default function RegisterPage() {
  const navigate = useNavigate()
  function VarifyUserDetails(UserDetails){
    const error = {}
    if(UserDetails.FullName ==""){
      error.FullName='Name Required *'
    }
    if(UserDetails.Email ==""){
      error.FullName='Email Required *'
    }
    if(UserDetails.MobileNo ==""){
      error.FullName='Mobile No. Required *'
    }
    if(UserDetails.Password ==""){
      error.FullName='Password Required *'
    }
   
    return error;

  }
  const formik= useFormik({
    initialValues:{
      Email:'',
      FullName:'',
      MobileNo:'',
      Password:''

    },
    validate:VarifyUserDetails,
    onSubmit:values=>{
     axios.post('http://127.0.0.1:4000/register',values);
     alert('Sign Up Successfull')
     navigate('/login')
    }
  })
  return (
    <div className="register-page">
      <div>
        <img src={logo} />
      </div>
      <form action="" onSubmit={formik.handleSubmit}>
      <div className="register">
        <h1>Sign Up</h1>
        <TextField
          className="username"
          value={formik.values.Email}
          onChange={formik.handleChange}
          autoFocus
          bgcolor="dander"
          fullWidth
          id="standard-basic"
          label="Email Address"
          variant="standard"
          type="email"
          name="Email"
        />
        <span>{formik.errors.Email}</span>
        <TextField
          className="username"
          bgcolor="dander"
          value={formik.values.FullName}
          onChange={formik.handleChange}
          fullWidth
          id="standard-basic"
          label="Full Name"
          variant="standard"
          type="text"
          name="FullName"
        />
        <span>{formik.errors.FullName}</span>
        <TextField
          className="username"
          value={formik.values.MobileNo}
        onChange={formik.handleChange}
          bgcolor="dander"
          fullWidth
          id="standard-basic"
          label="Mobile No."
          variant="standard"
          type="text"
          name="MobileNo"
        />
        <span>{formik.errors.MobileNo}</span>
        <TextField
          className="username"
          onChange={formik.handleChange}
         value={formik.values.Password}
          bgcolor="dander"
          fullWidth
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"

          name="Password"
        />
        <span>{formik.errors.Pa}</span>
        <button>Sign Up </button>
        <div className="remember">
          <div>
            <input type="checkbox" name="" id="" />
            <p>Remeember me</p>
          </div>
          <p>Need Help ?</p>
        </div>
        <p>
        Have an account? <Link to='/login'>Sign In</Link>
        </p>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href=""> Learn more.</a>
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
