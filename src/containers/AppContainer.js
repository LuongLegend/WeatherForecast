import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import App from '../App'
import {
    getWeatherForecast,
} from '../actions/index'
function AppContainer({ onGetWeatherForecast, current, daily }) {
    useEffect(() => {
        onGetWeatherForecast();
    }, [onGetWeatherForecast])

    return (
        <App current={current} daily={daily} />
    )
}

const mapStateToProps = ({ current, daily }) => {
    return { current, daily }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetWeatherForecast: () => dispatch(getWeatherForecast()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
