import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './login.css';

async function loginUser() {
  return fetch('./login.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data);
}
function Login({ isAuth, fromPage }) {
  const [username, setUsername] = useState(null);
  const [password, setPasswoed] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const auth = await loginUser();
    if (auth.username !== username || auth.password !== password) {
      alert('Incorrect username or password!');
    } else {
      sessionStorage.setItem('authStorage', true);
      isAuth(true);

      if (fromPage === '/') {
        navigate('/profile', { replace: true });
      } else {
        navigate(`${fromPage}`, { replace: true });
      }
    }
  };

  return (

    <form className="login-form" onSubmit={handleSubmit}>
      <input className="input-page" type="text" placeholder="Enter user name" onChange={(evt) => setUsername(evt.target.value)} />
      <input className="input-page" type="password" placeholder="Enter password" onChange={(evt) => setPasswoed(evt.target.value)} />
      <button className="btn" type="submit"> Submit </button>
    </form>

  );
}
Login.propTypes = {
  isAuth: PropTypes.func.isRequired,
  fromPage: PropTypes.string.isRequired,
};

export default Login;
