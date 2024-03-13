import { Link } from 'react-router-dom';
import './styles.css';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <header>
            <div className="header-content-container title-name text-align">
                <Link to="/">
                    <h1>MeuSite</h1>
                </Link>
                <nav className="navbar">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Início
                    </NavLink>
                    <NavLink to="/promotion" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Promoção
                    </NavLink>
                    <NavLink to="/enrollment" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Participar
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}