import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { goToApplicationForm, goToHomePage } from "../constants/Navigation";

const ListTripPage = () => {
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
                <button onClick={() => {goToApplicationForm(navigate)}}> Inscrever-se</button>
            </div>
        );
    }) 
    return(

        <div>
            <h1>Pagina de Viagens</h1>
            <button onClick={() => {goToHomePage(navigate)}}>Inicio</button>
            {renderTrips}

        </div>
    )
    }

export default ListTripPage;