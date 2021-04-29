import React from 'react'
import { getIconWeather, convertTempF } from '../../utils/common'
import { timestampToDate } from '../../utils/handleDatetime'
import './index.scss'
export default function ListItemDaily({ daily, temp: tempType}) {
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
                <span className='daily-temp'>{convertTempF(temp.day, tempType)}
                    <sup>⚬</sup>
                    {tempType}
                </span>
                <span>{humidity}<sup>⚬</sup></span><br />
                <span>{weather[0].description}</span>
            </div >
        )
    }

    return (
        <div className='daily-list'>
            {
                daily.map((item, index) => <DailyItem key={index} dailyData={item} />)
            }
        </div>

    )
}
