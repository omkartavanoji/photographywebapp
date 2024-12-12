import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Nav = () => {
  return (
      <>
        <div id='nav'>
          <Link to="/">HOME</Link>
          <Link to="/nav/work">PORTFOLIO</Link>
          <Link to="/nav/about">ABOUT US</Link>
          <Link to="/nav/contact">CONTACT US</Link>
          <Link to="/nav/table">DATA</Link>
        </div>
        <Outlet></Outlet>
      </>
  )
}

export default Nav