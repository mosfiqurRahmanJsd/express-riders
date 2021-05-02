import React, { useContext, useState } from "react";
import "./Login.css";
import Header from "../Header/Header";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import {
  handleGoogleSignIn,
  initializeLoginFramework,
  signInWithEmailAndPassword,
} from "./LoggedInManager";

const Login = () => {
  const [user, setUser] = useState({
    isSignedIn:false, 
    name: "", 
    email: "", 
    password: ""
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  initializeLoginFramework();

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setLoggedInUser(res);
      setUser(res)
      history.replace(from);
    });
  };

  const handleResponse = (res, redirect) => {
      setUser(res); 
      setLoggedInUser(res);
      if(redirect) {
        history.replace(from);
      }
  }


  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo); 
    }
  };


  const handleSubmit = (e) => {
    
    if (user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true)
      })
    }

    e.preventDefault();
  };


  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="card d-block mx-auto login">
          <div className="card-body p-2 p-md-5">
            <h4>Login</h4>

            <form onSubmit={handleSubmit}>
              <input
                className="form-control my-5 input"
                type="email"
                name="email"
                id=""
                placeholder="Email"
                onBlur={handleBlur}
                required
              />
              <input
                className="form-control my-5 input"
                type="password"
                name="password"
                id=""
                placeholder="Password"
                onBlur={handleBlur}
                required
              />

              <div className="d-flex justify-content-between ">
                <div>
                  <input
                    type="checkbox"
                    id="RememberPassword"
                    name="RememberPassword"
                    value="RememberPassword"
                  />
                  <label
                    style={{ paddingLeft: "5px", fontWeight: "600" }}
                    htmlFor="RememberPassword"
                  >
                    Remember Me
                  </label>
                </div>
                <Link className="link-color" to="/forgot_password">
                  Forgot Password
                </Link>
              </div>
              <input
                className="w-100 login-btn my-3"
                type="submit"
                value="Login"
              />
            </form>

            <p className="text-center mt-2">
              Don't Have Account ?{" "}
              <Link className="link-color" to="/signup">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="container container-sm-fluid ">
        <div className="sign-in">
          <div className="separator my-3">Or</div>
          <button
            onClick={googleSignIn}
            className="google-btn btn border w-100 d-flex align-items-center"
          >
            <img
              className="img-fluid mt-2"
              src="https://i.ibb.co/R0cy8Yn/Group-571.png"
              alt=""
            />
            <h6 className="mx-auto">Continue with Google</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
