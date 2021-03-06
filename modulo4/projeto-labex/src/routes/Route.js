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
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/admin/trips/list' element={<AdminHomePage/>}/>
            <Route path='/admin/trips/create' element={<CreateTripPage/>}/>
            <Route path='/admin/trips/:id' element={<TripDetailPage/>}/>
            <Route path='/trips/list' element={<ListTripsPage/>}/>
            <Route path='/trips/application' element={<ApplicationFormPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router;