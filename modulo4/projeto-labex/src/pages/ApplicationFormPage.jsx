import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import axios from 'axios'


const Button = styled.button`
// border-radius:50px;
// background-color: #310062;
// color: white;
// &:hover{
//   background-color: #ddc4f6;
//   box-shadow: 0 0 1em #310062;
//   color: #310062;
// }
`
const Nav = styled.div `
    // background-color: #ddc4f6;
`

const AplicationFormPage = () => {

  const navigate = useNavigate()
  const [trips, setTrips] = useState()

   const goToListTrips = () => {
     navigate("/trips/list")
   }

   useEffect(() => {
    getLists()
    }, [])


   const getLists = () =>{
    axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/miguel-pereira-guimaraes/trips')
        .then((res) => {
            // console.log(res.data.trips)
            setTrips(res.data.trips)})
        
        .catch(err => console.log(err))
}

    return (
<div>
    <header> 
            
    </header>
    <main>
        <div>
            <Nav >
                <h3 >
                    Inscreva-se para uma viagem
                </h3>
                <p >
                    Preencha e envie o formulário corretamente. <br/>
                    Prazo de análise e resposta: 3 dias úteis.
                </p>
            </Nav>
            <form >
                <div >
                    <select >
                        <option></option>
                        <option>Plutão</option>
                        <option>Jupter</option>
                        <option>Marte</option>
                        <option>Netuno</option>
                    </select>
                </div>
                <div >
                    <input 
                        type="name"  placeholder="Nome"/>
                </div>
                <div>
                    <input 
                        type="number"  placeholder="Idade"/>
                </div>
                <div>
                    <textarea  
                        placeholder="Carta de Inscrição"/>
                </div>
                <div>
                    <input 
                     type="text" placeholder="Profissão"/>
                </div>
                <div>
                    <input 
                        type="text" placeholder="País"/>
                </div>
            </form>
        </div>
        <div>
            <button type="submit">
                Enviar
            </button>
            <button onClick={goToListTrips}>
                Voltar
            </button>
        </div>
    </main>
    <footer> 
    </footer>
</div>
    );
  }
  
  export default AplicationFormPage;