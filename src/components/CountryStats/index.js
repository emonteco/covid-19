import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCountry } from '../../redux/countries/actions';
import { getCountryStats } from '../../redux/stats/actions';
import Stats from '../Stats';
import Country from '../Country';
import WorldMap from '../WorldMap';

const CountryStats = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.list);
  const selectedCountry = useSelector((state) => state.countries.selected);
  const countryStats = useSelector((state) => state.stats.country);
  const loadingCountryStats = useSelector((state) => state.stats.loadingCountryStats);

  const handleChangeCountry = (country) => {
    dispatch(selectCountry(country));
    dispatch(getCountryStats(country));
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
            confirmed={countryStats && countryStats.confirmed && countryStats.confirmed.value}
            recovered={countryStats && countryStats.recovered && countryStats.recovered.value}
            deaths={countryStats && countryStats.deaths && countryStats.deaths.value}
            lastUpdate={countryStats && countryStats.lastUpdate}
            verticalLayout
            loading={loadingCountryStats}
          />
        </div>
      </div>
    </div>
  );
};

export default CountryStats;
