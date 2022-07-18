import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { TEAM_PATH } from './RoutePath'

interface PublicRoute {
    children: Component
}

export default function PublicRoute({ children}) {

    const isLogged = useSelector((state:any) => state.isLoggedIn)
    return isLogged? <Navigate to={TEAM_PATH} />:children
}
