import React from 'react'
import { Link } from 'react-router-dom';
const Home = () =>{
    <div>
        <h1>Pagina Inicial</h1>
        <ul>
            <li>
                <link to="Atv01">Atividade 01</link> 
            </li>
            <li>
                <link to="Atv02">Atividade 02</link>
            </li>
            <li>
                <link to="Atv03">Atividade 03</link>
            </li>
            <li>
                <link to="Atv04">Atividade 04</link>
            </li>
            <li>
                <link to="Atv05">Atividade 05</link>
            </li>
        </ul>
    </div>
}
export default Home;