import React, { useContext } from 'react';
import styled from 'styled-components';
import GithubContext from '../context/github/githubContext';

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

  i {
    margin-right: 0.5rem;
  }

  .div p {
    margin-left: 0.4rem;
  }
`;

const Header = () => {
  const githubContext = useContext(GithubContext);
  const { theme, toggleTheme } = githubContext;

  const onClick = () => {
    theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')
  }

  return (
    <NavBar>
      <h1>Where in the world?</h1>
      <button className='theme-btn' onClick={onClick} >
        {theme === 'dark' ? <i className='fa-solid fa-moon'></i> : <i className='fa-regular fa-sun'></i> }
        {theme === 'dark' ? <p>  Dark Mode</p> : <p>  Light Mode</p>}
        
      </button>
    </NavBar>
  );
};

export default Header;
