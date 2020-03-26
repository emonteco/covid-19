import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import './Theme.css';

const Theme = ({ children }) => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const cssClass = darkTheme ? 'theme dark' : 'theme';

  return (
    <div className={cssClass}>
      {children}
    </div>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
