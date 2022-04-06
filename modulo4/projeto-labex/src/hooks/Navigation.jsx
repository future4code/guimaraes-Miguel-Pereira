import React from "react";


export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToLoginPage = (navigate) => {
    navigate('login-page')
};

export const goToAdminPage = (navigate) => {
    navigate('admin-page');

};

export const goToCreateTrip = (navigate) => {
    navigate('create-trip')
};

export const goToTripDetail = (navigate) => {
    navigate('trip-details')
};

export const goToTripsPage = (navigate) => {
    navigate('list-trips')
};

export const goToSubscripeTrip = (navigate) => {
    navigate('subscripe-page')
};

export const goBack = (navigate) => {
    navigate(-1)
};


