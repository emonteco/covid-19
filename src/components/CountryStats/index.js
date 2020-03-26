import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCountry } from '../../redux/countries/actions';
import Stats from '../Stats';
import Country from '../Country';
import WorldMap from '../WorldMap';

const CountryStats = () => {
  const dispatch = useDispatch();
  const countriesStats = useSelector((state) => state.stats.countries);
  const countries = useSelector((state) => state.countries.list);
  const selectedCountry = useSelector((state) => state.countries.selected);
  const selectedCountryStats = countriesStats.find((country) => country.iso2 === selectedCountry);

  const handleChangeCountry = (country) => {
    dispatch(selectCountry(country));
  };

  return (
    <div className="country-stats container mt-4 mt-md-5">
      <div className="row">
        <div className="col-sm-12 col-md-9">
          <WorldMap onClick={handleChangeCountry} selected={selectedCountry} />
        </div>
        <div className="col-sm-12 col-md-3 mt-3 mt-md-0">
          <h2 className="h4">Country</h2>
          <Country
            countries={countries}
            selected={selectedCountry}
            onChange={handleChangeCountry}
          />
          <Stats
            confirmed={selectedCountryStats && selectedCountryStats.confirmed}
            recovered={selectedCountryStats && selectedCountryStats.recovered}
            deaths={selectedCountryStats && selectedCountryStats.deaths}
            lastUpdate={selectedCountryStats && selectedCountryStats.lastUpdate}
            verticalLayout
          />
        </div>
      </div>
    </div>
  );
};

export default CountryStats;
