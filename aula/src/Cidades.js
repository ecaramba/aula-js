import './Cidades.css';
import { useState } from 'react';

export default function Cidades()
{
    const [cidades, setCidade] = useState(["Curitiba", "Colombo", "Pinhais"]);
    const [nova, setNova] = useState("");
    const [pesquisa, setPesquisa] = useState("");

    // gerando os li para cada item do vetor
    let lista = cidades
            // filtra os elementos do vetor pelo conteudo digitado
            .filter((item) => {
                return item
                    // coloca para minisculo para pesuisar todos
                    .toLowerCase()
                    // pesquisa cidade começando com o texto digitado
                    .startsWith(pesquisa.toLowerCase());
            })
            // adiciona li em cada item do vetor
            .map(function(item){
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
            <input type="text" onChange={ ler } className="form-control" />

            <button onClick={ add } className='btn btn-primary'>Adicionar Cidade</button>
            <br />

            <label>Pesquisa</label>
            <input type='text' onChange={ (ev) => setPesquisa(ev.target.value) } className="form-control" />

            <div className="lista">
                <ul>
                    { lista }
                </ul>
            </div>
        </div>
    )
}