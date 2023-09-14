import './Cidades.css';
import { useState } from 'react';

export default function Cidades()
{
    const [cidades, setCidade] = useState(["Curitiba", "Colombo", "Pinhais"]);
    const [nova, setNova] = useState();

    // gerando os li para cada item do vetor
    let lista = cidades.map(function(item){
        return <li key={ item }>{ item }</li>
    })

    // adiciona cidade no vetor cidades
    function add()
    {

        if (cidades.includes(nova) === true){
            window.alert("Cidade já cadastrada");
        } else if (nova != "") {
            setCidade([...cidades, nova])
        }
        
    }

    // lendo o conteudo digitado
    function ler(evento)
    {
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