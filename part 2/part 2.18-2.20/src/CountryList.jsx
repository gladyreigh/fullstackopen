import React from 'react';

const CountryList = ({ countries, onShowDetails }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length === 1) {
    return null; // Details are shown by `CountryDetails`
  }

  return (
    <ul>
      {countries.map(country => (
        <li key={country.cca3}>
          {country.name.common}
          <button onClick={() => onShowDetails(country)}>show</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
