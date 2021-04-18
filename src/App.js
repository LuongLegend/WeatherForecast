import React from 'react'
import './App.scss';
import GlobalLoadingContainer from './containers/GlobalLoadingContainer'
import { timestampToDate } from './utils/handleDatetime'
import WeatherForecastToday from './components/WeatherForecastToday'
function App(props) {
  const { current } = props;
  console.log(timestampToDate(1618482524, 'dddd', 'vi'))
  return (
    <div className='App'>
      <input type='search' placeholder='Search...' />
      <GlobalLoadingContainer />
      <WeatherForecastToday current={current}/>
    </div>
  );
}

export default App;
