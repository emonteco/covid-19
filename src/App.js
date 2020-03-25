import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getWorldStats } from './redux/stats/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorldStats());
  }, []);

  return (
    <div className="App">
      <header><h1>COVID-19</h1></header>
    </div>
  );
}

export default App;
