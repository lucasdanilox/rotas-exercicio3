import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {

    return (
        <header>
            <div className="header-content-container title-name text-align">
                <Link to="/">
                    <h1>MeuSite</h1>
                </Link>
                <nav className="navbar">
                    <div className="menu-item">
                        Início
                    </div>
                    <div className="menu-item">
                        Promoção
                    </div>
                    <div className="menu-item">
                        Participar
                    </div>
                </nav>
            </div>
        </header>
    );
}