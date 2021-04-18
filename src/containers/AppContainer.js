import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import App from '../App'
import {
    getWeatherForecast,
} from '../actions/index'
import {
    changeDateTime
} from '../actions/position'
function AppContainer({ onGetWeatherForecast, current, daily, onChangeDateTime }) {
    useEffect(() => {
        onGetWeatherForecast();
    }, [onGetWeatherForecast])

    return (
        <App current={current} daily={daily} onChangeDateTime={onChangeDateTime}/>
    )
}

const mapStateToProps = ({ current, daily }) => {
    return { current, daily }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetWeatherForecast: () => dispatch(getWeatherForecast()),
        onChangeDateTime: (dt) => dispatch(changeDateTime(dt)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
