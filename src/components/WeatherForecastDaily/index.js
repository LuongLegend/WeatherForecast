import React from 'react'
import './index.scss'
import ChartDaily from './ChartDaily'
import ListItemDaily from './ListItemDaily'
export default function WeatherForecastDaily({ daily }) {
    return (
        <>
            {
                daily.length !== 0 && <>
                    <ListItemDaily daily={daily}/>
                    <ChartDaily daily={daily} />
                </>
            }
        </>
    )
}
