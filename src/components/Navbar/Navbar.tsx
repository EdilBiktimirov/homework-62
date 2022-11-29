import React from 'react';
import {Link, NavLink} from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className='container-fluid'>
        <Link to="/" className="navbar-brand">Добрая пекарня</Link>
        <div className="collapse navbar-collapse">
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
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;