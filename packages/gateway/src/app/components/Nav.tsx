import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    
  return (
      <div>
          <header id="header" className="sticky-top bsb-tpl-header-sticky bsb-tpl-header-sticky-animationX">

    <nav id="scrollspyNav" className="navbar navbar-expand-lg bsb-tpl-bg-blue bsb-navbar bsb-navbar-hover bsb-navbar-caret bsb-tpl-navbar-sticky" data-bsb-sticky-target="#header">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="./assets/img/branding/wave-logo.svg" className="bsb-tpl-logo" alt="" />
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" aria-controls="offcanvasNavbar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <div className="offcanvas offcanvas-end" tab-index="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
              <ul id="bsb-tpl-navbar" className="navbar-nav justify-content-end flex-grow-1">
                
                    <li className="nav-item">
                    <Link className="nav-link active" to="/" aria-current="page" data-bs-dismiss="offcanvas">الرئيسية</Link>
                      </li>
               
                    <li className="nav-item">
                    <Link className="nav-link " to="/cpanel" >لوحه التحكم</Link>
                        
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link " to="/users" >المستخدمين</Link>
                        
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/tasks" >المهام</Link>
                        
                  </li>
                  
            </ul>
          </div>
        </div>
      </div>
    </nav>
    
    </header>
    
    </div>
  )
}

export default Nav