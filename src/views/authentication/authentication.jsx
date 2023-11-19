import './authentication.scss';
import { useState } from 'react';
import CustomBtn from '../../components/custom-btn/custom-btn.comp';
import CustomInput from '../../components/custom-input/custom-input.comp';
import AuthForm from '../../components/auth-form/auth-form.comp';

const Authentication = () => {
  const [signInForm, setSignInForm] = useState(true);

  return (
    <div className="authentication-container">
      <div className="controls-container">
        <span className={`control ${signInForm && 'active'}`} onClick={() => setSignInForm(true)}>Sign In</span>
        <span className={`control ${!signInForm && 'active'}`} onClick={() => setSignInForm(false)}>Sign Up</span>
      </div>
     {
       signInForm ? <AuthForm /> : <AuthForm type='signup' />
     }
    </div>
  );
};

export default Authentication;
