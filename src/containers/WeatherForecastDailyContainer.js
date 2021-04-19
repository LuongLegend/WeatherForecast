import React from 'react'
import { connect } from 'react-redux'
import WeatherForecastDaily from '../components/WeatherForecastDaily/index'

function WeatherForecastDailyContainer({ daily }) {
    return (
        <WeatherForecastDaily daily={daily} />
    )
}

const mapStateToProps = ({ daily }) => {
    return { daily }
}

export default connect(mapStateToProps)(WeatherForecastDailyContainer)
