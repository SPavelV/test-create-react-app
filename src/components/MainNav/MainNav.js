import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainNav extends Component {
  render() {
    return (
      <ul className="main-nav">
        <li className="main-nav__item">
          <Link to="#main" className="main-nav__link main-nav__link--active">
            Главная
          </Link>
        </li>
        {/*<li className="main-nav__item"><a href="#about-project" className="main-nav__link">О проекте</a></li>*/}
        {/*<li className="main-nav__item"><a href="#how-it-work" className="main-nav__link">Как это работает</a></li>*/}
        {/*<li className="main-nav__item"><a href="#run" className="main-nav__link">Присоединиться</a></li>*/}
        {/*<li className="main-nav__item"><a href="#login" className="main-nav__link">Войти</a></li>*/}
      </ul>
    )
  }
}

export default MainNav;