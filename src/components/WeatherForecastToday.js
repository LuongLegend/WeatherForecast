import React from 'react'

import { getIconWeather } from '../utils/common'
import { timestampToDate } from '../utils/handleDatetime'
import './WeatherForecastToday.scss'
export default function WeatherForecastToday(props) {
    const { current, position } = props;
    return (
        <div>
            {
                current && <>
                    {position && <span style={{ fontSize: '2em' }}>{position.address}</span>}
                    <span className='current-date'>{timestampToDate(current.dt, 'dddd', 'vi')}</span>
                    <br />
                    <img
                        className='icon-weather'
                        alt='today'
                        src={getIconWeather(current.weather[0].icon)}
                        width={50}
                    />
                    <span className='temp-today'>{current.temp}
                        <sup className='temp-today__unit'>o</sup>
                        <span>C</span>
                       </span>
                    <br />
                    <span className='current-description'>{current.weather[0].description}</span><br />
                    <div className='current-info'>
                        <div className="current-info__item1">Độ ẩm: {current.humidity}</div>
                        <div className="current-info__item2">Tốc độ gió: {current.wind_speed}</div>
                        <div className="current-info__item3">Tầm nhìn: {current.visibility/1000}</div>
                        <div className="current-info__item4">Nhiệt độ hóa sương: {current.dew_point}<sup>o</sup>C</div>
                        <div className="current-info__item5">Mặt trời: </div>
                        <div className="current-info__item6">🌄 {timestampToDate(current.sunrise, 'LT')}</div>
                        <div className="current-info__item7">🌅 {timestampToDate(current.sunset, 'LT')}</div>
                    </div>
                </>
            }
        </div>
    )
}
