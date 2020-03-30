import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getWorldStatsRequest } from './redux/stats/actions';
import { getCountriesRequest } from './redux/countries/actions';
import Header from './components/Header';
import WorldStats from './components/WorldStats';
import CountryStats from './components/CountryStats';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const theme = darkTheme ? 'dark' : 'light';

  useEffect(() => {
    dispatch(getCountriesRequest());
    dispatch(getWorldStatsRequest());
  }, []);

  useEffect(() => {
    document
      .getElementsByTagName('body')[0]
      .setAttribute('data-theme', theme);
  }, [darkTheme]);

  return (
    <>
      <Header />
      <WorldStats />
      <CountryStats />
      <Footer />
    </>
  );
}

export default App;
