import './authentication.scss';
import { useState } from 'react';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <div className="controls-container">
        <span className="sign-in control">Sign In</span>
        <span className="sign-up control">Sign Up</span>
      </div>
      <form>
        <div className="custom-form">
          <div className="input-container">
            <span className='label'>E-mail</span>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="input-field"
            />
          </div>
          <div className="input-container">
            <span className='label'>Password</span>
            <input
              type="password"
              placeholder="Your password"
              className="input-field"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Authentication;
