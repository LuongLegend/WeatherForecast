import React, { useEffect } from 'react'
import './App.scss';
import GlobalLoadingContainer from './containers/GlobalLoadingContainer'
function App(props) {
  const { onGetWeatherForecast } = props;
  useEffect(() => {
    onGetWeatherForecast();
  }, [])
  return (
    <div className='App'>
      <input type='search' placeholder='Search...' />
      <GlobalLoadingContainer />
    </div>
  );
}

export default App;
