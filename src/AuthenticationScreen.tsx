import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'

import { hasStorage,getStorage } from './Storage/localStorage'
import RouterComponent from './Routes/RouterComponent.tsx'

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
            // dispatch(handleKeys('isLoggedIn', true))
            let userData = getStorage('loggedInUserDetails')
            // dispatch(handleKeys('loggedInUserDetails',JSON.parse( userData)))
        }
    }
    return <div className='h-100'>
        <RouterComponent />
    </div>
}
