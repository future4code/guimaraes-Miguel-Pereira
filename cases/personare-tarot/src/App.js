import './App.css';
import { Header } from './components/Header';
import { Card } from './components/Cards';


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Header/>
      </header>
      <body className='App-body'>
        <Card 
        text={"O MAGO"}
        image={"https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano1.jpg"}/>
        <Card 
        text={"A SACERDOTISA"}
        image={"https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano2.jpg"}/>
        <Card 
        text={"A IMPERATRIZ"}
        image={"https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano4.jpg"}/>
        <Card 
        text={"O IMPERADOR"}
        image={"https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano5.jpg"}/>
        <Card 
        text={"O PAPA"}
        image={"https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano6.jpg"}/>
        <p>mensagem de teste</p>
      </body>
      <footer className='App-footer'>
        <p>mensagem de footer</p>
      </footer>
    </div>
  );
}

export default App;
