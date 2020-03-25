import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getWorldStats } from './redux/stats/actions';
import { getCountries, selectCountry } from './redux/countries/actions';
import Stats from './components/Stats';
import Country from './components/Country';

function App() {
  const dispatch = useDispatch();
  const worldStats = useSelector((state) => state.stats.world);
  const countries = useSelector((state) => state.countries.list);
  const selected = useSelector((state) => state.countries.selected);
  const { confirmed, recovered, deaths } = worldStats;

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getWorldStats());
  }, []);

  return (
    <div className="App">
      <header><h1>COVID-19</h1></header>
      <Stats
        confirmed={confirmed && confirmed.value}
        recovered={recovered && recovered.value}
        deaths={deaths && deaths.value}
        lastUpdate={worldStats && worldStats.lastUpdate}
      />
      <Country
        countries={countries}
        selected={selected}
        onChange={(country) => dispatch(selectCountry(country))}
      />
    </div>
  );
}

export default App;
