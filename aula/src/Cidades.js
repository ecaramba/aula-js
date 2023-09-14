import './Cidades.css';
import { useState } from 'react';

export default function Cidades()
{
    const [cidades, setCidade] = useState(["Curitiba", "Colombo", "Pinhais"]);
    const [nova, setNova] = useState();

    let lista = cidades.map(function(item){
        return <li key={ item }>{ item }</li>
    })

    function add()
    {
        // cidades.push(nova);
        setCidade([...cidades, nova])
        console.log(cidades)
    }

    function ler(evento)
    {
        console.log(evento.target.value);
        setNova(evento.target.value);
    }

    return (
        <div>
            <h1>Lista de Cidades</h1>
            <input type="text" onChange={ ler } />

            <button onClick={ add }>Adicionar Cidade</button>

            <div className="lista">
                <ul>
                    { lista }
                </ul>
            </div>
        </div>
    )
}