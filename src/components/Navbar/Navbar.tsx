import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-secondary bg-opacity-50">
      <div className='container'>
        <Link to="/" className="navbar-brand">Добрая пекарня</Link>
        <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Домашняя</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/production">Продукция</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio">Портфолио</NavLink>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;