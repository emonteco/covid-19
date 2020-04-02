import React from 'react';
import PropTypes from 'prop-types';

import './ThemeButton.css';
import { ReactComponent as DayIcon } from '../../assets/icons/day.svg';
import { ReactComponent as NightIcon } from '../../assets/icons/night.svg';

const ThemeButton = ({ darkTheme, onClick }) => (
  <button
    type="button"
    className="theme-button p-0 m-0 rounded-circle d-flex justify-content-center align-items-center"
    title="Toggle Theme"
    onClick={onClick}
  >
    {
      darkTheme ? <DayIcon id="light-mode" /> : <NightIcon id="dark-mode" />
    }
  </button>
);

ThemeButton.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ThemeButton;
