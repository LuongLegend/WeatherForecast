import React from 'react'

import { getIconWeather, convertTempF, convertMpStoKMpH } from '../utils/common'
import { timestampToDate } from '../utils/handleDatetime'
import './WeatherForecastToday.scss'
export default function WeatherForecastToday(props) {
    const { current, position, handleChangeTempType } = props;
    return (
        <div>
            {
                current && <>
                    {position && <span style={{ fontSize: '2em' }}>{position.address}</span>}
                    <span className='current-date'>{timestampToDate(current.dt, 'dddd', 'vi')}</span>
                    <div className='temp-container'>
                        <img
                            alt='today'
                            src={getIconWeather(current.weather[0].icon)}
                        />
                        <span className='temp-today'>
                            {convertTempF(current.temp, position.temp)}
                            <sup className='temp-today__unit'>⚬</sup>
                        </span>
                        <div>
                            <button type='button' className='temp--active'>{position.temp}</button>
                            <button
                                type='button'
                                className='temp--disabled'
                                onClick={() => handleChangeTempType(position.temp)}
                            >
                                {position.temp === "C" ? "F" : "C"}
                            </button>
                        </div>
                    </div>
                    <span className='current-description'>{current.weather[0].description}</span><br />
                    <div className='current-info'>
                        <div className="current-info__item1">Độ ẩm: {current.humidity}</div>
                        <div className="current-info__item2">Tốc độ gió: {convertMpStoKMpH(current.wind_speed)}</div>
                        <div className="current-info__item3">Tầm nhìn: {current.visibility / 1000}</div>
                        <div className="current-info__item4">
                            Nhiệt độ hóa sương: {convertTempF(current.dew_point, position.temp)}
                            <sup>⚬</sup>
                            {position.temp}
                        </div>
                        <div className="current-info__item5">Mặt trời: </div>
                        <div className="current-info__item6">🌄 {timestampToDate(current.sunrise, 'LT')}</div>
                        <div className="current-info__item7">🌅 {timestampToDate(current.sunset, 'LT')}</div>
                    </div>
                </>
            }
        </div>
    )
}
