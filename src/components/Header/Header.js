import React, {Component} from 'react';
import MainNav from '../MainNav/MainNav';
import ReactSVG from 'react-svg';
import logoSrc from '../../images/header/icon_logo_landing.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="page-header animate">

        <Link to="/" className="page-header__logo">
          [Home]
          <ReactSVG src={logoSrc} svgClassName="page-header__logo-icon" svgStyle={{ width: 95, height: 14}}/>
        </Link>

        <nav className="page-header__nav">
          <MainNav/>
        </nav>
        <Link to="/login" className="page-header__login">
          [Login]
        </Link>
        <div className="page-header__burger">
          <button type="button" className="menu-burger" aria-label="Toggle Navigation">Открыть меню <span
            className="menu-burger__lines"></span></button>
        </div>
      </header>
    )
  }
}

export default Header;