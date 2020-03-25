import React from 'react';
import PropTypes from 'prop-types';

const Country = ({ countries, selected, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <select value={selected} onChange={handleChange}>
      <option>{}</option>
      {
        countries.map((country) => (
          <option key={country.iso2} value={country.iso2}>{country.name}</option>
        ))
      }
    </select>
  );
};

Country.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    iso2: PropTypes.string,
  })).isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Country.defaultProps = {
  selected: null,
};

export default Country;
