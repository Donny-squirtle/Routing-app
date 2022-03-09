import { Link } from 'react-router-dom';
import './header.css';

function Header({logout, auth}) { 
    return(
        <header className="page-header">
            <div className="page-header__wrapper container">
                <nav className="main-navigation">
                        {
                            !auth ? 
                                <ul className="main-navigation__list navigation-list">
                                    <li className="navigation-list__item"><Link to="/">Home</Link></li>
                                    <li className="navigation-list__item"><Link to="/info">Information</Link></li>
                                </ul>
                            :
                                <ul className="main-navigation__list navigation-list">
                                    <li className="navigation-list__item"><Link to="/">Home</Link></li>
                                    <li className="navigation-list__item"><Link to="/info">Information</Link></li>
                                    <li className="navigation-list__item"><Link to="/profile">Profile</Link></li>
                                    <li className="navigation-list__item"><Link to="/calendar">Calendar</Link></li>
                                </ul>
                        }
                </nav>
                <div className="user-navigation">
                    {
                        !auth ? 
                            <Link to="/login">Log In</Link>
                            :
                            <button onClick={logout}>Log Out</button>
                    }
                    
                </div>
            </div>
        </header>
    )
}

export default Header;
