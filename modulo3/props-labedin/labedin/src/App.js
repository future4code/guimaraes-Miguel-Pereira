import React from 'react';
import './App.css';
import imagemPerfil from './Img/imagemPerfil.jpg'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imagemPerfil}
          nome="Miguel Tocchetto Pereira" 
          descricao="Oi, eu sou o Miguel. Sou estudante da Labenu em transição de carreira. Adoro esportes e sou muito estrovertido e sociavel,
          gosto de conhecer meus colegas e procuro sempre tratar a todos com respeito e simpatia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

        <CardPequeno
        imagem="https://th.bing.com/th/id/OIP.j31yml1f_OrH6xoHxIrJxQHaHa?pid=ImgDet&rs=1"
        info="Email: "
        texto="teste@gmail.com"

        />

        <CardPequeno
        imagem="https://th.bing.com/th/id/R.912184ec54855122cedb3ec2c947ae1d?rik=tsHpKGyYzWWfqQ&pid=ImgRaw&r=0"
        info="Endereço: "
        texto="Professor Lucas Silva, 55 / 201"
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fpoa8-1.fna.fbcdn.net/v/t1.6435-9/165590215_113360247508031_4772686012244585212_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LXAlEjc2tg4AX9GrJA7&_nc_ht=scontent.fpoa8-1.fna&oh=00_AT-boNTSYq0C5sPPTLxsBA14kpAPa987v-fdxHjoRz5Vqg&oe=621D902B" 
          nome="Rosa D'água" 
          descricao="Atendimento ao cliente, sempre com excelencia e atenciosidade." 
        />
        
        <CardGrande 
          imagem="https://scontent.fpoa8-1.fna.fbcdn.net/v/t1.6435-9/165590215_113360247508031_4772686012244585212_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LXAlEjc2tg4AX9GrJA7&_nc_ht=scontent.fpoa8-1.fna&oh=00_AT-boNTSYq0C5sPPTLxsBA14kpAPa987v-fdxHjoRz5Vqg&oe=621D902B" 
          nome="Rosa D'água" 
          descricao="Adminstrativo, auxiliar de contabilidade e ." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
          <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
          />        

          <ImagemButton 
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
            texto="Twitter" 
          />     
           <ImagemButton 
            imagem="https://i0.wp.com/prospere.fr/wp-content/uploads/2019/07/instagram.png" 
            texto="Instagram" 
          />      
      </div>
    </div>
  );
}

export default App;
