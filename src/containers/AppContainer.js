import React from 'react'
import { connect } from 'react-redux'
import App from '../App'
import {
    getWeatherForecast
} from '../actions/index'
function AppContainer(props) {
    const { onGetWeatherForecast } = props;
    return (
        <App onGetWeatherForecast={onGetWeatherForecast} />
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetWeatherForecast: () => dispatch(getWeatherForecast())
    }
}
export default connect(null, mapDispatchToProps)(AppContainer)
