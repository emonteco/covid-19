import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <Card title="Confirmed" number={confirmedString} />
        </div>
        <div className="col-sm-12 col-md-4">
          <Card title="Recovered" number={recoveredString} percentage={recoveredPercentageString} />
        </div>
        <div className="col-sm-12 col-md-4">
          <Card title="Deaths" number={deathsString} percentage={deathsPercentageString} />
        </div>
      </div>
      <p className="text-muted">{`Last update: ${lastUpdateString}`}</p>
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
