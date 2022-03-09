import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';

import { Homepage } from './pages/Homepage';
import { Information } from './pages/Information';
import { Loginpage } from './pages/Loginpage';
import { Notfoundpage } from './pages/Notfoundpage';
import { Profilepage } from './pages/Profilepage';
import { Calendarpage } from './pages/Calendarpage';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div className="page-body">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/info" element={<Information />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/login" element={<Loginpage isAuth={setAuth}/>} />
          <Route path="/calendar" element={ <Calendarpage /> } />
          <Route path="*" element={ <Notfoundpage /> }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
