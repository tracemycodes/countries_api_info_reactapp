import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CountrySection from './components/countries_section/CountrySection';
import SingleCountry from './components/countries_section/SingleCountry';
import Header from './components/Header';
import { LightTheme, DarkTheme, GlobalStyle } from './theme/globalStyle';

import GithubState from './context/github/GithubState';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle/>
      <GithubState>
        <Router>
          <div className='App'>
            <Header />
            <Routes>
              <Route exact path='/' element={<CountrySection />} />
              <Route exact path='/country/:id' element={<SingleCountry />} />
            </Routes>
          </div>
        </Router>
      </GithubState>
    </ThemeProvider>
  );
}

export default App;
