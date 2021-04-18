import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import App from '../App'
import {
    getWeatherForecast
} from '../actions/index'
function AppContainer({ onGetWeatherForecast, current }) {
    useEffect(() => {
        onGetWeatherForecast();
    }, [onGetWeatherForecast])

    return (
        <App current={current} />
    )
}

const mapStateToProps = ({ current }) => {
    return { current }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetWeatherForecast: () => dispatch(getWeatherForecast())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
