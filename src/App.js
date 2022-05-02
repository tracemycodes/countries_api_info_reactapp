import { useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import CountrySection from './components/countries_section/CountrySection';
import SingleCountry from './components/countries_section/SingleCountry';
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
          <Route exact path='/country/:id' element={ <SingleCountry/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
