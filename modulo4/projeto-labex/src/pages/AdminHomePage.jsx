import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { goToTripDetails, goToCreateTrip, goToHomePage } from "../constants/Navigation";

const AdminHomePage = () => {
    const navigate = useNavigate();

    const [trips, setTrips] = useState([])

    useEffect(() => {
        getLists()
    }, [])

    const getLists = () =>{
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/miguel-pereira-guimaraes/trips')
            .then((res) => {
                console.log(res.data.trips)
                setTrips(res.data.trips)})
            
            .catch(err => console.log(err))
    }
    
    const renderTrips = trips.map((trip) => {
        return(
            <div>
                <ul>
                    <p key={trip.id}> Data: {trip.date}</p>
                    <p key={trip.id}> Nome: {trip.name}</p>
                    <p key={trip.id}> Descrição: {trip.description}</p>
                    <p key={trip.id}> Local: {trip.planet}</p>
                    <p key={trip.id}> Duração: {trip.durationInDays} dias</p>
                </ul>
                <button onClick={() => {goToTripDetails(navigate)}}> Acessar detalhes </button>
            </div>
        );
    }) 
    return(

        <div>
            <h1>Nossas Viagens</h1>
            <button onClick={() => {goToHomePage(navigate)}}>Home</button>
            {renderTrips}
            <button
          onClick={() => {
            goToCreateTrip(navigate);
          }}
        >
          Criar Viagens
        </button>

        </div>
    )
    }

export default AdminHomePage;