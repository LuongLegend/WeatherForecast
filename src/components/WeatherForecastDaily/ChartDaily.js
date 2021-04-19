import React, { useMemo } from 'react'
import { Line } from "react-chartjs-2";
import { timestampToDate } from '../../utils/handleDatetime'
const options = {
    responsive: true,
    scales: {
        yAxes: [
            {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                },
                gridLines: {
                    display: false,
                }
            }
        ],
        xAxes: [
            {
                gridLines: {
                    display: false
                }
            }
        ],
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'yellow'
            }
        }
    },
}
export default function ChartDaily({ daily }) {
    const dayOfWeek = daily.map(item => {
        const day = timestampToDate(item.dt, 'dddd - DD/MM/YYYY', 'vi');
        return day;
    })
    const tempDayOfWeek = daily.map(item => item.temp.day);
    const humidityDayOfWeek = daily.map(item => item.humidity);
    const data = useMemo(() => {
        return {
            labels: dayOfWeek,
            datasets: [
                {
                    label: 'Nhiệt độ',
                    data: tempDayOfWeek,
                    backgroundColor: ['rgba(255,99, 71, 0.8)'],
                    borderWidth: 4
                },
                {
                    label: 'Độ ẩm',
                    data: humidityDayOfWeek,
                    backgroundColor: ['rgba(75,192, 192, 0.8)'],
                    // borderWidth: 4
                },
            ]
        }
    }, [dayOfWeek, tempDayOfWeek, humidityDayOfWeek])
    return (
        <div style={{ width: 1000, height: 500, margin: '0 auto' }}>
            <Line data={data} options={options} />
        </div>
    )
}
