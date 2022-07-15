import React, {Component} from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { LOGIN_PATH } from './RoutePath'


interface PrivateRoute {
    children: Component
}

export default function PrivateRoute({ children }) {

    const isLogged = useSelector((state:any) => state.isLoggedIn)

    return isLogged ? children : <Navigate to={LOGIN_PATH} />;
}