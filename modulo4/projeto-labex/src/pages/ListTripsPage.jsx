import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListTripPage = () => {
    const navigate = useNavigate();

    // useEffect(
    //     getTrips()
    // )

    // const getTrips = (res) => {
    //     axios.get(
    //         'https://us-central1-labenu-apis.cloudfunctions.net/labeX/miguel-pereira-guimaraes/trips'
    //     )
    //     .then((res) => {
    //         console.log( res.data );
    //       })
    //       .catch((err) => {
    //           alert(err);
    //       });
    // }


    return(

        <div>
            <h1>Pagina de Viagens</h1>

        </div>
    )

}

export default ListTripPage;