import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { hasStorage, getStorage } from './Storage/localStorage'
import RouterComponent from './Routes/RouterComponent.tsx'
import { handleKeys } from './ReduxStore/reducer.tsx'

export default function AuthenticationScreen() {
    const dispatch = useDispatch()

    useEffect(() => {
        handleLoad()
        // window.addEventListener('load', handleLoad)
        // return () => {
        //     window.removeEventListener('load', handleLoad)
        // }
    }, [])

    const handleLoad = () => {
        if (hasStorage('userToken')) {
            let userData = getStorage('loggedInUserDetails')
            dispatch(handleKeys({ key: 'loggedInUserDetails', value: JSON.parse(userData) }))
        }
    }
    return <div className='h-100'>
        <RouterComponent />
    </div>
}
