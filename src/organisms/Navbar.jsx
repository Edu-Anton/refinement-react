import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark container position-absolute fixed-top">
      <a className="navbar-brand" href="/">Refinement</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/" activeClassName="is-selected">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeClassName="is-selected">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/services" activeClassName="is-selected">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/gallery" activeClassName="is-selected">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar