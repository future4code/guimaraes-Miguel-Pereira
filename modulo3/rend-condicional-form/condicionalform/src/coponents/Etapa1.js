function Etapa1() {
    return (
      <div>
        <h1>ETAPA 1 - Dados Gerais</h1>
        <div>
            <p><b> 1. Qual seu nome? </b></p>
            <input 
                type="text" 
                placeholder="Nome"
            />
            <p><b> 1. Qual sua idade? </b></p>
            <input 
                type="number" 
                placeholder="Idade"
            />
            <p><b> 1. Qual seu email? </b></p>
            <input 
                type="email" 
                placeholder="Email"
            />
            <p><b> Qual sua escolaridade? </b></p>
            <select>
                <option value="medioIncompleto">Ensino Médio Incompleto</option>
                <option value="medioCompleto">Ensino Médio Completo</option>
                <option value="superiorIncompleto">Ensino Superior Incompleto</option>
                <option value="superiorCompleto">Ensino Superior Completo</option>
            </select>
        </div>
      </div>
    );
  }
  
  export default Etapa1;