import React, {useState, useEffect} from 'react';
import axios from 'axios';

function HomePage(  ) {

    const headers = {
        headers: {
          Authorization: "miguel-pereira-guimaraes",
        },
      };

    const URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/miguel-pereira`

      const [user, setUser] = useState([]);
      const [like, setLike] = useState(false);

      useEffect(() => {
        getProfile();
      }, [])

    const  getProfile = () => {

            axios
              .get(
                `${URL}/person`,
              )
              .then((res) => {
                console.log( res.data.profile );
                // setUser( res.data.profile );
              })
              .catch((err) => {
                  console.log(err);
              });
          };

    const choosePerson = () => {
            axios
             .get(
                 `${URL}/choose-person`,
             )
             .then((res) => {
                 console.log( res.data.profile )

             })
             .catch((err) => {
                 console.log(err);
             })
        };

    return(
        <div>
            <h1>AstroMatch</h1>
            <div>{user}</div>
        </div>
    )

};

export default HomePage;