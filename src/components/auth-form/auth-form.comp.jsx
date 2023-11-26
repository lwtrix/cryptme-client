import './auth-form.styles.scss';
import React, { useEffect, useState } from 'react';
import CustomBtn from '../custom-btn/custom-btn.comp';
import CustomInput from '../custom-input/custom-input.comp';
import CustomErrors from '../custom-error/custom-errors.comp';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ type = 'signin' }) => {
  const authText = {
    title: type === 'signin' ? 'Sign In' : 'Sign Up',
    signin:
      'Please sign in using the e-mail and password you used when signing up. Alternatively, click the sign up button to create an account.',
    signup:
      'Please sign up using a valid e-mail, a username and a secure password. You will also need to provide a secret auth key when creating an admin account. Alternatively, click the sign in button to sign in if you already have an account.',
  };

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    username: '',
  });
  const [authKey, setAuthKey] = useState('');

  const handleFieldChange = (value, fieldToSet) => {
    setCredentials({
      ...credentials,
      [fieldToSet]: value,
    });
  };

  const handleSignIn = async () => {
    setErrors([]);

    const options = {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    };

    const res = await fetch('http://localhost:4000/auth/signin', options);
    const data = await res.json();

    if (!res.ok) {
      setErrors(data.errors);
    } else {
      dispatch({ type: 'SET_USER', payload: data });
      navigate('/admin-dashboard')
    }
  };

  const handleSignUp = async () => {
    setErrors([]);

    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ ...credentials, key: authKey }),
    };

    const res = await fetch('http://localhost:4000/auth/signup', options);
    const data = await res.json();

    if (!res.ok) {
      setErrors(data.errors);
    }
  };

  const handleAuth = (event) => {
    event.preventDefault();

    switch (type) {
      case 'signin':
        handleSignIn();
        break;
      case 'signup':
        handleSignUp();
        break;
    }
  };

  const clearFormFields = () => {
    setCredentials({ email: '', password: '', username: '' });
    setAuthKey('');
  };

  useEffect(() => {
    clearFormFields();
    setErrors([]);
  }, [type]);

  return (
    <>
      <div className="auth-form-container">
        <div className="auth-text-container">
          <span className="auth-heading">{authText.title}</span>
          <span className="auth-text">{authText[type]}</span>
        </div>
        {errors.length ? <CustomErrors errors={errors} /> : null}
        <form className="custom-form" onSubmit={handleAuth}>
          {type !== 'signup' ? null : (
            <CustomInput
              type={'text'}
              placeholder={'ex: johnnydoe'}
              label={'Username'}
              value={credentials.username}
              handleChange={(e) =>
                handleFieldChange(e.target.value, 'username')
              }
            />
          )}
          <CustomInput
            type={'email'}
            placeholder={'ex: test@test.com'}
            label={'E-mail'}
            value={credentials.email}
            handleChange={(e) => handleFieldChange(e.target.value, 'email')}
          />
          <CustomInput
            type={'password'}
            placeholder={'Type your password..'}
            label={'Password'}
            value={credentials.password}
            handleChange={(e) => handleFieldChange(e.target.value, 'password')}
          />
          {type !== 'signup' ? null : (
            <CustomInput
              type={'password'}
              placeholder={'Secret key goes here..'}
              label={'Auth Key'}
              labelInfo={
                'This is required to create an admin account. You would have been given this key by an administrator or they would create the account for you.'
              }
              value={authKey}
              handleChange={(e) => setAuthKey(e.target.value)}
            />
          )}
          <CustomBtn size={'sm'} radius={'round-1'}>
            {authText.title}
          </CustomBtn>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
