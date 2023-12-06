
import {useState} from 'react';
import './atv02.css';

function incrementar(){
    setTotal(total +1);
    setContagem(contagem +1);
}
function decrementar(){
    setTotal(total -1);
    setContagem(contagem -1);
}
function botao({genero,contagem,incremento,decremento}){
    cont [contagem,setContagem] = useState(0);
    return(
        <div>
            <p>{genero}</p>
            <button onClick={incremento}> 
                +
            </button>
            <button onClick={decremento}> 
                -
            </button>
            <p>
                {contagem}
            </p>
        </div>
    )
}
function resetar(){
    setTotal(0);
    setContagem(0);
}
function Atv02(){
    const [total, setTotal] = useState(0);
    return (
        <>
            <link to="/">Retornar para a pagina inicial</link>
            <h1>Contagem total  </h1>
            {contador}
            <h1>Homem</h1>
            <botao genero={homem} contagem={contagem} incremento={incrementar} decremento={decrementar}/>
            <h1>Mulher</h1>
            <botao genero={mulher} contagem={contagem} incremento={incrementar} decremento={decrementar}/>
            <button onClick="resetar()">Resetar</button>
        </>
    );
}

export default Atv02;