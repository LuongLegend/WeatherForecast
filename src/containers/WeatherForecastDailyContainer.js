import React from 'react'
import { connect } from 'react-redux'
import WeatherForecastDaily from '../components/WeatherForecastDaily'
import {
    changeDateTime
} from '../actions/position'
function WeatherForecastDailyContainer({ onChangeDateTime, daily, position }) {
    return (
        <WeatherForecastDaily daily={daily} dateTime={position.dt} onChangeDateTime={onChangeDateTime}/>
    )
}

const mapStateToProps = ({ position, daily }) => {
    return { position, daily }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeDateTime: (dt) => dispatch(changeDateTime(dt)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecastDailyContainer)
