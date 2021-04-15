import React from 'react'
import LoadingIcon from '../assets/images/loading.gif'
import './GlobalLoading.scss'
const GlobalLoading = ({ isLoading }) => {
    return (
        <>
            { isLoading &&
                <div className='loading-fullscreen'>
                    <img src={LoadingIcon} alt='loading' className='loading-fullscreen__icon' />
                </div>
            }
        </>
    )
}

export default GlobalLoading;