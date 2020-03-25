import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = ({ title, number, percentage }) => (
  <div className="card">
    <h1>{title}</h1>
    <p>
      {number}
      {percentage && <span>{percentage}</span>}
    </p>
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
