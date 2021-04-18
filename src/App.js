import React from 'react'
import './App.scss';
import GlobalLoadingContainer from './containers/GlobalLoadingContainer'
import WeatherForecastToday from './components/WeatherForecastToday'
import WeatherForecastDailyContainer from './containers/WeatherForecastDailyContainer'
function App(props) {
  const { current } = props;
  return (
    <div className='App'>
      <input type='search' placeholder='Search...' />
      <GlobalLoadingContainer />
      <WeatherForecastToday current={current} />
      <WeatherForecastDailyContainer />
    </div>
  );
}

export default App;
