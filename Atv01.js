
import {useState} from 'react';

function digitacao(){
    if(i < mensagem.lenght){
        setTexto((prevTexto)=> prevTexto + mensagem[i]);
        i++;
        setTimeout(digitacao(),100);
    }
    else{
        let i = 0;
        digitacao();
    }
}
function relogio(){
    setInterval(() =>{
        setTime(new Date().toLocaleTimeString());
    },1000);
}
function estilo(){
    const divS = {
        textAlign: 'center',
        marginTop: '50px',
      };
    
      const textoS = {
        fontSize: '24px',
        color: '#333',
      };
    
      const tempoS = {
        fontSize: '24px',
        color: '#555',
      };
}
function Atv01(){
    const[tempo,setTempo] = useState(setTime(new Date().toLocaleTimeString()));
const [texto, setTexto] = useState(0);
const mensagem = "Venha estudar na Fatec";
    digitacao();
    relogio();
    return (
        <>
            <link to="/">Retornar para a pagina inicial</link>
            <div style={divS}>
                <h1 style={textoS}>{texto}</h1>
                <h1 style={tempoS}>{tempo}</h1>
            </div>
        </>
    );
}

export default Atv01;