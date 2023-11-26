import './authentication.scss';
import { useState } from 'react';
import AuthForm from '../../components/auth-form/auth-form.comp';
import { useDispatch, useSelector } from 'react-redux';

const Authentication = () => {
  const [signInForm, setSignInForm] = useState(true);
  const currentUser = useSelector((state) => state.currentUser.user);
  const dispatch = useDispatch()

  const logout = async () => {
    const res = await fetch('http://localhost:4000/auth/signout', { credentials: 'include', method: 'POST' })
    const data = await res.json()
    dispatch({ type: 'SET_USER', payload: null })
    console.log(data)
  }

  const getCurrentUser = async () => {
    const res = await fetch('http://localhost:4000/auth/currentUser', { credentials: 'include' })
    const {currentUser} = await res.json()
    if(!currentUser) {
      dispatch({ type: 'SET_USER', payload: null })
    }
  }

  return (
    <div className="authentication-container">
      <div className="controls-container">
        <span className={`control ${signInForm && 'active'}`} onClick={() => setSignInForm(true)}>Sign In</span>
        <span className={`control ${!signInForm && 'active'}`} onClick={() => setSignInForm(false)}>Sign Up</span>
      </div>
     {
       signInForm ? <AuthForm /> : <AuthForm type='signup' />
     }
     <button onClick={logout}>Logout</button>
     <button onClick={getCurrentUser}>Get CurrentUser</button>
     <h1>{currentUser && currentUser.username}</h1>
    </div>
  );
};

export default Authentication;
