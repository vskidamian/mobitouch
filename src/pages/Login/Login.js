import React, { useState } from 'react';
//hooks
import { useLogin } from '../../hooks/useLogin';
//components
import Header from '../../components/Header'
//styling and animation
import styled from 'styled-components';

//images
import loginIcon from './images/login.png';
import passIcon from './images/pass.png';
import google from './images/google.png';
import facebook from './images/facebook.png';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(login, password);
  }

  return (
    <LoginForm onSubmit={handleSubmit}>
      <Header />
      <h1>Zaloguj się</h1>
      <hr className="green-line" />
      <div className="login-form-inner">
        <label className="form-input">
          <img className="input-icon" src={loginIcon} alt="" />
          <input type="text" onChange={(e) => setLogin(e.target.value)} value={login} />
        </label>
        <label className="form-input">
          <img className="input-icon" src={passIcon} alt="" />
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </label>
        <div className="remeber-forgot">
          <label className="remeber-checkbox">
            <input type="checkbox" />
            Zapamiętaj mnie
          </label>
          <a href="/">Zapomniałaś hasła?</a>
        </div>
        {isPending ? <button className="green-button" disabled>Logowanie...</button> : <button className="green-button">Zaloguj się</button>}
        {error && <p className="ERROR-MSG">{error}</p>}
        <div className="login-external-providers">
          <p>Lub zaloguj się przez</p>
          <div className="external-providers__links">
            <a href="/"><img src={google} alt="" /></a>
            <a href="/"><img src={facebook} alt="" /></a>
          </div>
        </div>
      </div>
    </LoginForm>
  );
}

const LoginForm = styled.form`
  max-height: 624px;
  max-width: 640px;
  margin: auto;

  h1 {
    text-align: center;
  }
  .form-input {
    margin: auto;
    display: block;
    position: relative;

    input {
      display: block;
      width: 100%;
      min-height: 56px;
      margin: 20px 0;
      border: 1px solid #77838F;
      border-radius: 10px;
      padding-left: 50px;
    }
  }

  .input-icon {
    position: absolute;
    top: 17px;
    left: 17px;;
  }
  
  .login-form-inner {
    padding: 0 8px;
  }

  .remeber-forgot {
    color: #77838F;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .remeber-checkbox {
      input {
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }
    }
    a {
      color: #77838F;
    }
  }

  .green-button {
    height: 56px;
    width: 100%;
    background: #43BE8D;
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    margin: 17px auto 27px auto;
    filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.15));
    cursor: pointer;
  }

  .login-external-providers {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    p {
      font-size: 16px;
      font-weight: bold;
      color: #77838F;
    }
    .external-providers__links {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 15px;
    }
    .external-providers__links a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      filter: drop-shadow(-4px 4px 6px rgba(0, 0, 0, 0.1));
      cursor: pointer;
    }
    .external-providers__links img{
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
`;

export default Login;