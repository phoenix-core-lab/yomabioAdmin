import React, { useState } from "react";
import logo from "../assets/Logo (3).svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./styles.sass";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://213.230.71.82:4123/admin/login", {
        name,
        password,
      });

      // Handle successful login
      if (response.status === 200 || response.status === 201) {
        // Navigate to the next page
        Cookies.set("access_token", response.data.access_token);
        navigate("/mainPage"); // replace '/nextpage' with your target route
      }
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };
  return (
    <div className='loginPage'>
      <div className='inner-header flex'>
        <form
          action=''
          className='form'
          onSubmit={handleSubmit}
        >
          <div className='inputBoxContainer'>
            <div className='inputBox'>
              <input
                type='text'
                placeholder='Имя'
                className='input'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='inputBox'>
              <input
                type='text'
                placeholder='Пароль'
                className='input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='inputBox'>
              <button className='btn'>Войти</button>
            </div>
          </div>
        </form>
      </div>
      <div className='loginLogo'>
        <img
          src={logo}
          alt='logo'
        />
      </div>
      <div>
        <svg
          className='waves'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shapeRendering='auto'
        >
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g class='parallax'>
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='0'
              fill='rgba(255,255,255,0.7'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='3'
              fill='rgba(255,255,255,0.5)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='5'
              fill='rgba(255,255,255,0.3)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='7'
              fill='#fff'
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LoginPage;
