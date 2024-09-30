import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-sm">
  <div className="container-fluid d-flex justify-content-between">
    <img src={logo} alt="iBlog"/>
    <Link to='/' className='fw-bold text-decoration-none text-dark'>iBlog</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/about'>About Us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to='/blogger'>Be A Blogger</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar