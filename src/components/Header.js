import logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
    const { pathname } = useLocation();
    const route = `${pathname === '/sign-in' ? '/sign-up' : '/sign-in'}`
    const signText = `${pathname === '/sign-in' ? 'Регистрация' : 'Войти'}`
    return (
        <header className="header">
            <img src={logo} alt="Логотип" className="header__logo" />
            <div className="header__auth">
                {props.loggedIn ? (
                    <>
                        <p className="header__email header__auth-text">{props.email}</p>
                        <Link className="header__signout header__auth-text header__auth-exit" onClick={props.onSignOut} to="/sign-in">Выйти</Link>
                    </>
                ) : 
                (<Link className="header__signin header__auth-text" to={route} >{signText}</Link>)}
            </div>
        </header>
    )
}

export default Header;