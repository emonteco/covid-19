import React from 'react';
import PropTypes from 'prop-types';

import './Country.scss';

const Country = ({ countries, selected, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="country row mb-4">
      <div className="col-12">
        <select value={selected} onChange={handleChange} className="form-control">
          <option>{}</option>
          {
            countries.map((country) => (
              <option key={country.iso2} value={country.iso2}>{country.name}</option>
            ))
          }
        </select>
      </div>
    </div>
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
