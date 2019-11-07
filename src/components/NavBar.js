import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/Logo.png'

const NavBar = () => {

    let navBar = (
    <nav className="navbar navbar-expand-md navbar-dark " style={{backgroundColor: '#66CD00'}}>
    <div className="navbar-brand text-light" style={{fontSize: 40}}>
        <img src={Logo} width="50" height="50" className="d-inline-block mb-1" alt=""></img>
        Dietrix
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-4" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link" style={{fontSize: 19}}>Home<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/blogs" className="nav-link" style={{fontSize: 19}}>Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to="/client-diaries" className="nav-link" style={{fontSize: 19}}>Client-Diaries</Link>
        </li>
        <li className="nav-item">
          <Link to="/consult" className="nav-link" style={{fontSize: 19}}>Consult</Link>
        </li>
        
      </ul>
    </div>
  </nav>
  )

    return(
        <div>
            {navBar}
        </div>
    )
}

export default NavBar