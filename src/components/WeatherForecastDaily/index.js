import React, { useState } from 'react'
import './index.scss'
import ChartDaily from './ChartDaily'
import ListItemDaily from './ListItemDaily'
export default function WeatherForecastDaily({ daily, temp }) {
    const [showChart, setShowChart] = useState(false);
    return (
        <>
            {
                daily.length !== 0 && <>
                    <strong>Daily</strong>
                    <input type='button'
                        className={!showChart ? 'active-button' : ''}
                        value='Chi tiết'
                        onClick={() => setShowChart(false)}
                    />
                    <input
                        type='button'
                        value='Tóm tắt'
                        className={showChart ? 'active-button' : ''}
                        onClick={() => setShowChart(true)}
                    />
                    <hr />
                    {
                        !showChart ?
                            <ListItemDaily daily={daily} temp={temp}/> :
                            <ChartDaily daily={daily} />
                    }
                </>
            }
        </>
    )
}
