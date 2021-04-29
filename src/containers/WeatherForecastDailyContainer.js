import React from 'react'
import { connect } from 'react-redux'
import WeatherForecastDaily from '../components/WeatherForecastDaily/index'

function WeatherForecastDailyContainer({ daily, position }) {
    const { temp } = position;
    return (
        <WeatherForecastDaily daily={daily} temp={temp} />
    )
}

const mapStateToProps = ({ daily, position }) => {
    return { daily, position }
}

export default connect(mapStateToProps)(WeatherForecastDailyContainer)
