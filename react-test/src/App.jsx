import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Information from './pages/information/Information';
import Loginpage from './pages/Loginpage';
import Notfoundpage from './pages/Notfoundpage';
import Profilepage from './pages/profilepage/Profilepage';
import Calendarpage from './pages/Calendarpage';
import RequireAuth from './hoc/RequireAuth';
import './App.css';
import './styles/globals.css';

function App() {
  const authStorage = sessionStorage.getItem('authStorage');
  const [auth, setAuth] = useState(JSON.parse(authStorage));

  const handleLogOut = () => {
    sessionStorage.setItem('authStorage', false);
    setAuth(false);
  };

  return (
    <div className="page-body">
      <Header logout={handleLogOut} auth={auth} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/info" element={<Information />} />
          <Route
            path="/profile"
            element={(
              <RequireAuth auth={auth}>
                <Profilepage />
              </RequireAuth>
          )}
          />
          <Route path="/login" element={<Loginpage isAuth={setAuth} authStorage={authStorage} />} />
          <Route
            path="/calendar"
            element={(
              <RequireAuth auth={auth}>
                <Calendarpage />
              </RequireAuth>
          )}
          />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
