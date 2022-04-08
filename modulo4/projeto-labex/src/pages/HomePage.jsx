import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin,  goToListTrips } from "../constants/Navigation";

const HomePage = () => {
    const navigate = useNavigate();
   
    return(
        <div>
            <h1> Astro Trip </h1>
            <button onClick={() => {goToListTrips(navigate)}}> Acessar Viagens </button>
            <button onClick={() => {goToLogin(navigate)}}> Área Administrativa </button>
        </div>

    )


}

export default HomePage;