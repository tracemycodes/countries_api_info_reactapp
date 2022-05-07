import React from 'react';
import styled from 'styled-components';

const NavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 3rem;
  font-size: 0.55rem;
  background-color: ${ ( { theme } ) => theme.header };
  box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.1);
  color: ${ ( { theme } ) => theme.text };
  z-index: 3;
  margin: 0;

  button {
    border: none;
    display: flex;
    font-size: 0.7rem;
    background-color: ${ ( { theme } ) => theme.header };
    color: ${ ( { theme } ) => theme.text };
    cursor: pointer;
  }

  .theme-icon {
    margin-right: 0.5rem;
  }

  .div p {
    margin-left: 0.4rem;
  }
`;

const Header = () => {
  return (
    <NavBar>
      <h1>Where in the world?</h1>
      <button className='theme-btn'>
        <i className='fa-regular fa-sun theme-icon'></i>
        <p>Dark Mode</p>
      </button>
    </NavBar>
  );
};

export default Header;
