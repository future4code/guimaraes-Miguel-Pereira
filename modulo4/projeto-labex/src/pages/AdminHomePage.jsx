import React, {useState, useEffect} from 'react'
import axios from 'axios'
import useProtectPage from '../hooks/useProtectPage'

const AdminHomePage = () => {
    useProtectPage()

    const [trips, setTrips] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/miguel-pereira-guimaraes/trip/0aQ9retlt9zxpeo40G2M', 
            {
                auth: token
            }
            
            )
            .then( res => {
                console.log(res.data.trips)
                setTrips( res.data.trips )
            })
            .catch(err => console.log(err.response))
    }, [])

    return(

        <div>
            <h1>Pagina Inicial Admin</h1>
            <ul> {trips} </ul>
        </div>
    )
}

export default AdminHomePage;