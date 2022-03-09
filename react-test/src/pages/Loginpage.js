import { useLocation, Navigate } from 'react-router-dom';
import { Login } from '../components/login/Login';

function Loginpage({ isAuth, authStorage }) {
  const location = useLocation();
  if (JSON.parse(authStorage) === true) {
    return <Navigate to="/profile" state={{from: location}} />
  }
  const fromPage = location.state?.from?.pathname || '/';
    return (
      <div>
        <h1>
          Log In
        </h1>
        <Login isAuth={isAuth} fromPage={fromPage}/>
      </div>
    );
}
export { Loginpage };
