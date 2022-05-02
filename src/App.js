import { useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountrySection from './components/countries_section/CountrySection';
import Header from './components/Header';

function App() {
  const [countriesArr, setCountriesArr] = useState([]);

  const getCountryInfo = async () => {
    const countryResponse = await fetch('https://restcountries.com/v2/all'),
      countryData = await countryResponse.json();

    setCountriesArr(countryData);
  };

  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={<CountrySection
                getCountryInfo={getCountryInfo}
                countriesArr={countriesArr}
              />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
