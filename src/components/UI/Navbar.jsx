// import React, { useState, useEffect } from 'react';
// useLocation TBUTILIZED
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

function Navbar() {
  return (
    <div className='nav-row'>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/project_display'>Project Display</Link>
      </div>
    </div>
  )
}

export default Navbar
