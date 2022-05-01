import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
  case value:
    
    break;

  default:
    break;
} }
import CountrySection from "./components/countries_section/CountrySection";
import Header from "./components/Header";


function App() {
  const [countriesArr, setCountriesArr] = useState([]);

   const getCountryInfo = async () => {
    const countryResponse = await fetch('https://restcountries.com/v2/all'),

    countryData = await countryResponse.json();

    setCountriesArr(countryData)
   }

  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' render={props => (
          <CountrySection getCountryInfo={getCountryInfo} countriesArr={countriesArr} />

        )} />
      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
