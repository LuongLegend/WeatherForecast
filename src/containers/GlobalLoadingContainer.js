import React from 'react'
import { connect } from 'react-redux'
import GlobalLoading from '../components/GlobleLoading'

const GlobalLoadingContainer = ({ ui }) => {
    const { isLoading } = ui;
    return (
        <GlobalLoading isLoading={isLoading} />
    )
}

const mapStateToProps = ({ ui }) => {
    return { ui }
}
export default connect(mapStateToProps)(GlobalLoadingContainer);