import React from 'react'

import { getIconWeather } from '../utils/common'
import { timestampToDate } from '../utils/handleDatetime'
import './WeatherForecastToday.scss'
export default function WeatherForecastToday(props) {
    const { current } = props;
    return (
        <div>
            {
                current && <>
                    <span className='current-date'>{timestampToDate(current.dt, 'dddd', 'vi')}</span>
                    <br />
                    <img
                        className='icon-weather'
                        alt='today'
                        src={getIconWeather(current.weather[0].icon)}
                        width={50}
                    /> <br />
                    <span className='current-description'>{current.weather[0].description}</span><br />
                    <div className='current-info'>
                        <div className="current-info__item1">Nhiệt độ: {current.temp} <sup>o</sup>C</div>
                        <div className="current-info__item2">Tốc độ gió: {current.wind_speed}</div>
                        <div className="current-info__item3">Độ ẩm: {current.humidity}</div>
                        <div className="current-info__item4">Tầm nhìn: {current.visibility}</div>
                        <div className="current-info__item5">Nhiệt độ hóa sương: {current.dew_point}<sup>o</sup>C</div>
                    </div>
                </>
            }
        </div>
    )
}
