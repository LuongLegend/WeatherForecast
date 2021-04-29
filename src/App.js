import React from 'react'
import './App.scss';
import GlobalLoadingContainer from './containers/GlobalLoadingContainer'
import WeatherForecastToday from './components/WeatherForecastToday'
import WeatherForecastDailyContainer from './containers/WeatherForecastDailyContainer'
function App(props) {
  const { current, handleChangeAddress, position, handleChangeTempType } = props;
  return (
    <div className='App'>
      <input
        type='search'
        placeholder='Search...'
        onChange={e => handleChangeAddress(e.target.value)}
      />
      <br />
      {!current && <strong>Không có dữ liệu</strong>}
      <GlobalLoadingContainer />
      <WeatherForecastToday
        current={current}
        position={position}
        handleChangeTempType={handleChangeTempType}
      />
      <WeatherForecastDailyContainer />
    </div>
  );
}

export default App;
