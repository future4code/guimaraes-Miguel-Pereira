import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';


const ComponenteDeTeste = () => {
  return(
    <div>
      <p>Olá, sou um componente</p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Header/>
      </header>
      <body className='App-body'>
        <p>mensagem de teste</p>
      </body>
      <footer className='App-footer'>
        <p>mensagem de footer</p>
      </footer>
    </div>
  );
}

export default App;
