import { useState } from "react";
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
    <div className="App">
      <Header/>
      <CountrySection getCountryInfo={getCountryInfo} countriesArr={countriesArr} />
    </div>
  );
}

export default App;
