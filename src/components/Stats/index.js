import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Card from '../Card';
import { getNumberString, getPercentageString } from '../../utils/strings';

const Stats = ({
  confirmed, recovered, deaths, lastUpdate, verticalLayout,
}) => {
  const lastUpdateString = (lastUpdate && moment(lastUpdate).fromNow()) || '-';
  const confirmedString = getNumberString(confirmed);
  const recoveredString = getNumberString(recovered);
  const deathsString = getNumberString(deaths);
  const recoveredPercentageString = getPercentageString(recovered, confirmed);
  const deathsPercentageString = getPercentageString(deaths, confirmed);
  const cssClass = verticalLayout ? 'col-sm-12 mb-2' : 'col-sm-12 col-md-4 mb-2';

  return (
    <div className="world-stats">
      <div className="row">
        <div className={cssClass}>
          <Card
            title="Confirmed"
            number={confirmedString}
            color="warning"
          />
        </div>
        <div className={cssClass}>
          <Card
            title="Recovered"
            number={recoveredString}
            percentage={recoveredPercentageString}
            color="success"
          />
        </div>
        <div className={cssClass}>
          <Card
            title="Deaths"
            number={deathsString}
            percentage={deathsPercentageString}
            color="danger"
          />
        </div>
      </div>
      <small className="text-muted">{`Last update: ${lastUpdateString}`}</small>
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
  verticalLayout: PropTypes.bool,
};

Stats.defaultProps = {
  confirmed: null,
  recovered: null,
  deaths: null,
  lastUpdate: '',
  verticalLayout: false,
};

export default Stats;
