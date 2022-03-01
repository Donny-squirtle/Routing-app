import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';

import { Homepage } from './pages/Homepage';
import { Information } from './pages/Information';
import { Loginpage } from './pages/Loginpage';
import { Notfoundpage } from './pages/Notfoundpage';

function App() {
  return (
    <div className="page-body">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/info" element={ <Information /> } />
          <Route path="/login" element={ <Loginpage /> } />
          <Route path="*" element={ <Notfoundpage /> }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
