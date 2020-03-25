import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getWorldStats, getCountriesStats } from './redux/stats/actions';
import { getCountries, selectCountry } from './redux/countries/actions';
import Stats from './components/Stats';
import Country from './components/Country';
import WorldMap from './components/WorldMap';

function App() {
  const dispatch = useDispatch();
  const worldStats = useSelector((state) => state.stats.world);
  const countriesStats = useSelector((state) => state.stats.countries);
  const countries = useSelector((state) => state.countries.list);
  const selectedCountry = useSelector((state) => state.countries.selected);
  const selectedCountryStats = countriesStats.find((country) => country.iso2 === selectedCountry);
  const handleChangeCountry = (country) => {
    dispatch(selectCountry(country));
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getWorldStats());
    dispatch(getCountriesStats());
  }, []);

  return (
    <div className="App">
      <header><h1>COVID-19</h1></header>
      <h1>World Stats</h1>
      <Stats
        confirmed={worldStats && worldStats.confirmed && worldStats.confirmed.value}
        recovered={worldStats && worldStats.recovered && worldStats.recovered.value}
        deaths={worldStats && worldStats.deaths && worldStats.deaths.value}
        lastUpdate={worldStats && worldStats.lastUpdate}
      />
      <WorldMap onClick={handleChangeCountry} selected={selectedCountry} />
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
      />
    </div>
  );
}

export default App;
