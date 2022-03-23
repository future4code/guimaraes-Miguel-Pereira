import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import HomePage from './Components/HomePage';
import PageMatchs from './Components/PageMatchs'


function App() {

  const [screen, setScreen] = useState("HomePage")
  const selectScreen = () => {
    switch (screen) {
      case "HomePage":
        return<HomePage selectHome={selectHome} />

      case "PageMatchs":
        return<PageMatchs selecMatchs={selectMatchs} />
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
      {/* {selectScreen()} */}
      <HomePage />
      <PageMatchs />
    </div>
  );
}

export default App;
