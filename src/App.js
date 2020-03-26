import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getWorldStats, getCountriesStats } from './redux/stats/actions';
import { getCountries } from './redux/countries/actions';
import Header from './components/Header';
import WorldStats from './components/WorldStats';
import CountryStats from './components/CountryStats';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getWorldStats());
    dispatch(getCountriesStats());
  }, []);

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
