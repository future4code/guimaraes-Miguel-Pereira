import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToTripsPage } from "../hooks/Navigation";

const HomePage = () => {
    const navigate = useNavigate();

    return(
        <div>
            <h1> Astro Trip </h1>
            <button onClick={() => {goToTripsPage(navigate)}}> Acessar Viagens </button>
            <button onClick={() => {goToLoginPage(navigate)}}> Área Administrativa </button>
        </div>

    )


}

export default HomePage;