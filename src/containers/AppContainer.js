import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import App from '../App'
import {
    getWeatherForecast,
} from '../actions/index'
import {
    changeAddress
} from '../actions/position'
function AppContainer({ onGetWeatherForecast, onChangeAddress, current, daily, position }) {
    useEffect(() => {
        onGetWeatherForecast();
        console.log(position)
    }, [onGetWeatherForecast, position])

    return (
        <App
            current={current}
            daily={daily}
            handleChangeAddress={onChangeAddress}
            position={position}
        />
    )
}

const mapStateToProps = ({ current, daily, position }) => {
    return { current, daily, position }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetWeatherForecast: () => dispatch(getWeatherForecast()),
        onChangeAddress: (address) => dispatch(changeAddress(address)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
