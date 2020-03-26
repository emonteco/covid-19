import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleTheme } from '../../redux/theme/actions';
import ThemeButton from '../ThemeButton';

const Header = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const handleClickButton = () => dispatch(toggleTheme());

  return (
    <header className="container pt-4">
      <div className="row">
        <div className="col-9">
          <h1>COVID-19</h1>
        </div>
        <div className="col-3 d-flex flex-column align-items-end justify-content-center">
          <ThemeButton darkTheme={darkTheme} onClick={handleClickButton} />
        </div>
      </div>
    </header>
  );
};

export default Header;
