import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';
import Weather from './Weather';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  useEffect(() => {
    setFilteredCountries(countries.filter(country =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    ));
  }, [searchQuery, countries]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>Country Information</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a country"
      />
      <CountryList
        countries={filteredCountries}
        onShowDetails={handleShowDetails}
      />
      {selectedCountry && (
        <>
          <CountryDetails country={selectedCountry} />
          <Weather capital={selectedCountry.capital[0]} />
        </>
      )}
    </div>
  );
};

export default App;
