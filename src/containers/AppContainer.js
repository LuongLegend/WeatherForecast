import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import App from '../App'
import {
    getWeatherForecast,
} from '../actions/index'
import {
    changeAddress,
    changeTempType
} from '../actions/position'
function AppContainer({
    onGetWeatherForecast,
    onChangeAddress,
    current,
    daily,
    position,
    onChangeTempType
}) {
    useEffect(() => {
        onGetWeatherForecast();
    }, [onGetWeatherForecast, position.lat, position.lon])

    return (
        <App
            current={current}
            daily={daily}
            handleChangeAddress={onChangeAddress}
            handleChangeTempType = {onChangeTempType}
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
        onChangeTempType: (temp) => dispatch(changeTempType(temp))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
