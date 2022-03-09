import { Login } from '../components/login/Login';

function Loginpage({isAuth}) {
    return (
      <div>
        <h1>
          Log In
        </h1>
        <Login isAuth={isAuth}/>
      </div>
    );
}
export {Loginpage};