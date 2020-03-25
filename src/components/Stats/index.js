import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Stats.css';
import Card from '../Card';

const Stats = ({
  confirmed, recovered, deaths, lastUpdate,
}) => {
  const lastUpdateString = lastUpdate ? moment(lastUpdate).fromNow() : '-';

  return (
    <div className="world-stats">
      <div className="cards">
        <Card title="Confirmed" number={confirmed} />
        <Card title="Recovered" number={recovered} percentage={recovered / confirmed} />
        <Card title="Deaths" number={deaths} percentage={deaths / confirmed} />
      </div>
      <p>{`Last update: ${lastUpdateString}`}</p>
    </div>
  );
};

Stats.propTypes = {
  confirmed: PropTypes.number,
  recovered: PropTypes.number,
  deaths: PropTypes.number,
  lastUpdate: PropTypes.string,
};

Stats.defaultProps = {
  confirmed: 0,
  recovered: 0,
  deaths: 0,
  lastUpdate: '',
};

export default Stats;
