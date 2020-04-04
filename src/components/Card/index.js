import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';
import { formatNumber } from '../../utils/numbers';

const Card = ({
  title, number, percentage, color, loading,
}) => (
  <div className="card">
    <div className="card-body">
      {
        loading
          ? <div className="spinner-border text-primary" role="status" />
          : (
            <h3 className={`m-0 text-${color}`}>
              {formatNumber(number)}
              {percentage && <small className="text-muted ml-1">{percentage}</small>}
            </h3>
          )
        }
      <p className="m-0">
        {title}
      </p>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  percentage: PropTypes.string,
  color: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  percentage: null,
  color: 'primary',
};

export default Card;
