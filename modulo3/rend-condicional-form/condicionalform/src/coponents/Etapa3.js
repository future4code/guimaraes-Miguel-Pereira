function Etapa3() {
    return (
      <div>
        <h1>ETAPA 3: Informações sobre quem não se formou <br /> no ensino superior nem está cursando</h1>
        <div>
            <p><b>1. Por que você não terminou o curso de graduação?</b></p>
            <input type="text" />
            <p><b>2 Você fez algum curso complementar?</b></p>
            <select>
                <option value="tecnico">Curso técnico</option>
                <option value="ingles">Curso de Inglês</option>
                <option value="nenhum">Não fiz curso complementar</option>
            </select>
        </div>
      </div>
    );
  }
  
  export default Etapa3;