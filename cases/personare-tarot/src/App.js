import './App.css';
import { Header } from './components/Header';
import { Card } from './components/Cards';
import React from 'react';

class App extends React.Component {

  state = {
    FrontCard : "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/",
    BackCard : "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png"
  }

  turnCard = () => {
    this.setState({BackCard : this.state.FrontCard+"arcano1.jpg"})
    // alert("carta virada!")
  }

  render(){

  return (
    <div className="App">
      <header className='App-header'>
        <Header/>
      </header>
      <body className='App-body'>
        <Card 
        text={"O MAGO"}
        image={this.state.BackCard}
        click={this.turnCard}/>
        <Card 
        text={"A SACERDOTISA"}
        image={`${this.state.BackCard}arcano2.jpg`}/>
        <Card 
        text={"O IMPERADOR"}
        image={`${this.state.BackCard}arcano4.jpg`}/>
        <Card 
        text={"O PAPA"}
        image={`${this.state.BackCard}arcano5.jpg`}/>
        <Card 
        text={"OS ENAMORADOS"}
        image={`${this.state.BackCard}arcano6.jpg`}/>
        <p>mensagem de teste</p>
      </body>
      <footer className='App-footer'>
        <p>mensagem de footer</p>
      </footer>
    </div>
  );
}
}

export default App;
