import axios from "axios";
import React, {useState, useEffect} from "react";
import useProtectPage from "../hooks/useProtectPage";
import { useNavigate } from "react-router-dom";
import {goToHomePage, goBack,  goToCreateTrip} from '../constants/Navigation'

const TripDetailPage = () => {
    const navigate = useNavigate();

    const [trip, setTrip] = useState('');

    // useProtectPage();

    useEffect(()=>{

    const token = localStorage.getItem("token");

    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/caio-ramos-guimaraes/trip/9UumLxT1nIZLppIKamYN`,
        { headers: {
            auth: token,
          },
        })
      .then((res) => {
        console.log(res.data.trip);
        setTrip(res.data.trip);
      })
      .catch((err) => console.log(err.response));
  }, []);
    return(
        <div>
        <h2>TripDetails</h2>
        {/* {trip} */}
        <button
          onClick={() => {
            goBack(navigate);
          }}
        >
          Voltar
        </button>
        <button
          onClick={() => {
            goToHomePage(navigate);
          }}
        >
          Voltar para Home
        </button>
      </div>
    );
}

export default TripDetailPage;