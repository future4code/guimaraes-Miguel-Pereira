import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AdminHomePage from '../pages/AdminHomePage'
import LoginPage from '../pages/LoginPage'
import CreateTripPage from '../pages/CreateTripPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import ListTripsPage from '../pages/ListTripsPage'
import TripDetailPage from '../pages/TripDetailPage'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {

    return(
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='login-page' element={<LoginPage/>}/>
            <Route path='admin-page' element={<AdminHomePage/>}/>
            <Route path='create-trip' element={<CreateTripPage/>}/>
            <Route path='trip-details' element={<TripDetailPage/>}/>
            <Route path='list-trips' element={<ListTripsPage/>}/>
            <Route path='form-page' element={<ApplicationFormPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router;