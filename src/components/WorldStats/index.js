import React from 'react';
import { useSelector } from 'react-redux';

import Stats from '../Stats';

const WorldStats = () => {
  const worldStats = useSelector((state) => state.stats.world);

  return (
    <div className="world-stats container mt-4">
      <h2 className="h4">World Stats</h2>
      <Stats
        confirmed={worldStats && worldStats.confirmed && worldStats.confirmed.value}
        recovered={worldStats && worldStats.recovered && worldStats.recovered.value}
        deaths={worldStats && worldStats.deaths && worldStats.deaths.value}
        lastUpdate={worldStats && worldStats.lastUpdate}
      />
    </div>
  );
};

export default WorldStats;
