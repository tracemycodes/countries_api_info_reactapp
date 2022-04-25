import React from 'react'
import styled from 'styled-components'

const NavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 3rem;
  font-size: 0.55rem;
  background-color: hsl(209, 23%, 22%);
  box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.1);
  color: #fff;
  z-index: 3;
`

const Header = () => {
  return (
    <NavBar>
      <h1>Where in the world?</h1>
        <button class="theme-btn">
          <i class="fa-regular fa-sun theme-icon"></i>
          <p>Dark Mode</p>
        </button>
    </NavBar>
  )
}

export default Header
