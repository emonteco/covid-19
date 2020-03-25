import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Stats.css';
import Card from '../Card';
import { getNumberString, getPercentageString } from '../../utils/strings';

const Stats = ({
  confirmed, recovered, deaths, lastUpdate,
}) => {
  const lastUpdateString = (lastUpdate && moment(lastUpdate).fromNow()) || '-';
  const confirmedString = getNumberString(confirmed);
  const recoveredString = getNumberString(recovered);
  const deathsString = getNumberString(deaths);
  const recoveredPercentageString = getPercentageString(recovered, confirmed);
  const deathsPercentageString = getPercentageString(deaths, confirmed);

  return (
    <div className="world-stats">
      <div className="cards">
        <Card title="Confirmed" number={confirmedString} />
        <Card title="Recovered" number={recoveredString} percentage={recoveredPercentageString} />
        <Card title="Deaths" number={deathsString} percentage={deathsPercentageString} />
      </div>
      <p>{`Last update: ${lastUpdateString}`}</p>
    </div>
  );
};

Stats.propTypes = {
  confirmed: PropTypes.number,
  recovered: PropTypes.number,
  deaths: PropTypes.number,
  lastUpdate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Stats.defaultProps = {
  confirmed: null,
  recovered: null,
  deaths: null,
  lastUpdate: '',
};

export default Stats;
