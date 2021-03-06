import React from "react";
import { Route, Routes } from 'react-router-dom'

import PrivateRoute from "./PrivateRoute.tsx";
import PublicRoute from "./PublicRoute.tsx";
import { LOGIN_PATH, SIGNUP_PATH, TEAM_PATH } from "./RoutePath";
import Home from "../AuthComponents/Home.tsx";
import Login from "../AuthComponents/Login.tsx";
import Signup from "../AuthComponents/Signup.tsx";
import TeamList from '../AppComponents/ListTeams.tsx'



export default function RouterComponent(props) {

    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path={LOGIN_PATH} element={<PublicRoute><Login/></PublicRoute>} />
        <Route path={SIGNUP_PATH} element={<PublicRoute><Signup/></PublicRoute>} />
        <Route path={TEAM_PATH} element={<PrivateRoute><TeamList/></PrivateRoute>} />
    </Routes>
}