import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getWorldStats } from './redux/stats/actions';
import { getCountries } from './redux/countries/actions';
import Stats from './components/Stats';

function App() {
  const dispatch = useDispatch();
  const worldStats = useSelector((state) => state.stats.world);
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
    </div>
  );
}

export default App;
