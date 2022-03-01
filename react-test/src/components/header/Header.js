import { Link } from 'react-router-dom';
import './header.css';

function Header() { 
    return(
        <header className="page-header">
            <div className="page-header__wrapper container">
                <nav className="main-navigation">
                    <ul className="main-navigation__list navigation-list">
                        <li className="navigation-list__item"><Link to="/">Home</Link></li>
                        <li className="navigation-list__item"><Link to="/info">Information</Link></li>
                    </ul>
                </nav>
                <div className="user-navigation">
                    <Link to="/login">Log In</Link>
                </div>
            </div>
        </header>
    )
}

export default Header