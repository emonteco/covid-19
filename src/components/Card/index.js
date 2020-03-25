import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = ({ title, number, percentage }) => {
  const percentageString = percentage && `(${(percentage * 100).toFixed(2)}%)`;

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>
        {number}
        {percentageString && <span>{percentageString}</span>}
      </p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  percentage: PropTypes.number,
};

Card.defaultProps = {
  percentage: null,
};

export default Card;
