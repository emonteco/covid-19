import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = ({ title, number, percentage }) => (
  <div className="card">
    <div className="card-body">
      <h4 className="card-title m-0 text-primary">
        {number}
        {percentage && <small className="text-muted ml-1">{percentage}</small>}
      </h4>
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
};

Card.defaultProps = {
  percentage: null,
};

export default Card;
