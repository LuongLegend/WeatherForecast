import React from 'react'
import { getIconWeather } from '../utils/common'
import { timestampToDate } from '../utils/handleDatetime'
import './WeatherForecastDaily.scss'
export default function WeatherForecastDaily({ daily }) {
    const DailyItem = ({ dailyData }) => {
        const {
            dt,
            weather,
            temp,
            humidity
        } = dailyData;
        return (
            <div className='daily-list__item--active' >
                { timestampToDate(dt, 'dddd')} < br />
                { timestampToDate(dt, 'DD/MM/YYYY')} < br />
                <img src={getIconWeather(weather[0].icon)} alt='daily' /><br />
                <span className='daily-temp'>{temp.day}<sup>o</sup>C</span>
                <span>{humidity}<sup>o</sup></span><br />
                <span>{weather[0].description}</span>
            </div >
        )
    }
    return (
        <>
            Daily
            <hr />
            <div className='daily-list'>
                {
                    daily.map((item, index) => <DailyItem key={index} dailyData={item} />)
                }
            </div>
        </>
    )
}
