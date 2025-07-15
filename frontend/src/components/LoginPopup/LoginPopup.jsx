import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { ImCross } from "react-icons/im";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPopup = ({ setShowLoginPopup }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let payLoad;
    let newUrl = url;

    if (currState === "Login") {
      newUrl += "/api/user/login";
      payLoad = {
        email: data.email,
        password: data.password
      };
    } else {
      newUrl += "/api/user/register";
      payLoad = {
        name: data.name,
        email: data.email,
        password: data.password
      };
    }

    try {
      const response = await axios.post(newUrl, payLoad);
      if (response.data.success) {
        setToken(response.data.token);
        toast.success("User logged in successfully!");
        setShowLoginPopup(false);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred. Please try again.");
      console.error("Login/Register error:", err.response?.data || err);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='login-popup-container-bg'>
        <form className="login-popup-container" onSubmit={onLogin}>
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <ImCross  onClick={() => setShowLoginPopup(false)} />
          </div>

          <div className="login-popup-inputs">
            {currState === "Sign Up" && (
              <input
                type="text"
                placeholder='Username'
                required
                value={data.name}
                onChange={onChangeHandler}
                name="name"
              />
            )}
            <input
              type="email"
              placeholder='Your Email'
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              required
            />
            <input
              type="password"
              placeholder='Password'
              required
              name="password"
              value={data.password}
              onChange={onChangeHandler}
            />
          </div>

          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>

          <button>{currState === "Login" ? "Login" : "Create Account"}</button>

          {currState === "Login" ? (
            <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginPopup;
