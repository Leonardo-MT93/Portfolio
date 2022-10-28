import React from 'react';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <div className='header'>
        <nav className='menu_header'>
        <ul className='listado_header'>
            <li className='listado'>
              <NavLink to="/Home" className="navLink" >X</NavLink>
            </li>
            <li className='listado'>
              <NavLink to="/Biography" className="navLink">X</NavLink>
            </li>
            <li className='listado'>
              <NavLink to="/Knowledge" className="navLink">X</NavLink>
            </li>
            <li className='listado'>
              <NavLink to="/Projects" className="navLink">X</NavLink>
            </li>
            <li className='listado'>
              <NavLink to="/Contact" className="navLink">X</NavLink>
            </li>
        </ul>
        </nav>
    </div>
  )
}
