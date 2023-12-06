import {useState} from 'react';

function botao({funcao},{valor}){
    return(
        <button onClick={funcao}>
            {valor}
        </button>
    );
}
function apagar(){
    setCalculo('');
}
function adicionarValor({entrada,caracter}){
    setCalculo((prevCalculo) => prevCalculo + caracter);
    setEntrada((prevEntrada) => prevEntrada + entrada )
}
function resultado(){
    try{
        resultado = eval(calculo);
        setEntrada(resultado);
    }
    catch(E)
    {
       setEntrada("Error");
    }
}
function numerosCalculadora(){
    let numeros = [];
    for(let i = 0; i <= 9; i++ ){
        numeros.push(<botao key={i} funcao={adicionarValor(i,i)} valor={i}/>)
    }
    return numeros;
}
function mudarSinal(){
    ultimoCaractere = calculo[calculo.length - 1];
    if(ultimoCaracter == "-"){
        setCalculo(calculo.substring(0, calculo.length - 1) + "+");
        
    }
    else if(ultimoCaracter == "+"){
        setCalculo(calculo.substring(0, calculo.length - 1) + "-");
    }
}
function porcentagem(){
    try{
        numero = calculo.match(/\d+(?![\d\D]*\d)/);
        numero = numero/100;
        calculo.replace(/\d+(?![\d\D]*\d)/,numero);
    }
    catch(E){
        setEntrada("Error");
    }
}
function caracteresCalculadora(){
    let caracteres = [];
    caracteres.push(<botao funcao={adicionarValor("÷","/")} valor={"÷"}/>);
    caracteres.push(<botao funcao={adicionarValor("x","*")} valor={"x"}/>);
    caracteres.push(<botao funcao={adicionarValor("-","-")} valor={"-"}/>);
    caracteres.push(<botao funcao={adicionarValor("+","+")} valor={"+"}/>);
    caracteres.push(<botao funcao={apagar()} valor={"C"}/>);
    caracteres.push(<botao funcao={mudarSinal()} valor={"+pos/nega"}/>);
    caracteres.push(<botao funcao={porcentagem()} valor={"%"}/>);
    caracteres.push(<botao funcao={resultado()} valor={"="}/>);
    caracteres.push(<botao funcao={adicionarValor(",",".")} valor={","}/>);
    return(
        caracteres
    )
}
function Calculadora(){
    const [calculo, setCalculo] = useState('');
    const [entrada, setEntrada] = useState(0);
    return(
             <div>
                <numerosCalculadora/>
                <caracteresCalculadora/>
            </div>
    )
  }
  function Atv04() {
    return (
      <>
        <div className="tela">{entrada}</div>
        <a href="/">Retornar para a página inicial</a>
        <div className="calculadora">
          <Calculadora />
        </div>
      </>
    );
  }

export default Atv04;