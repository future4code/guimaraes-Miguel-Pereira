import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import HomePage from './Components/HomePage';
import PageMatchs from './Components/PageMatchs'


function App(props) {

  const [screen, setScreen] = useState("HomePage")
  const selectScreen = () => {
    switch (screen) {
      case "HomePage":
        return<HomePage selectMatchs={selectMatchs} />

      case "PageMatchs":
        return<PageMatchs selectHome={selectHome} />
    }
  }

  const selectMatchs = () =>{
    setScreen("PageMatchs")
  };

  const selectHome = () =>{
    setScreen("HomePage")
  };


  return (
    <div className="App">
      {selectScreen()}
    </div>
  );
}

export default App;
