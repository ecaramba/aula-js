import { useState } from 'react';
import axios from 'axios'

export default function Pokedex()
{

    const [nomePesquisa, setNomePesquisa] = useState("");
    const [pokemon, setPokemon] = useState({});

    async function pesquisar()
    {
        let retorno = await axios.get("https://pokeapi.co/api/v2/pokemon/" + nomePesquisa );
        setPokemon(retorno.data);
    }

    return (
    <div className="container">

        <div className="row justify-content-md-center">
            <div className="col-6 mt-4" >

                <div className="input-group">
                    <input 
                        onChange={ (ev) => setNomePesquisa(ev.target.value) }
                        type="text" 
                        placeholder="Nome ou ID" 
                        className="form-control"/>
                    <button 
                        onClick={pesquisar} 
                        className="btn btn-outline-danger" 
                        type="button">Pesquisar</button>
                </div>

                <div className="card text-bg-danger mt-4">
                    <div className="card-header">Pokedex</div>
                    <img src={ pokemon.sprites.other.dream_world.front_default } />
                    
                    <div className="card-body">
                        <h5 className="card-title"> { pokemon.name } </h5>
                        <p className="card-text">
                       
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Peso: { pokemon.weight } </li>
                        <li className="list-group-item">Altura: { pokemon.height }</li>
                        <li className="list-group-item disabled">Habilidades</li>
                        { pokemon.abilities.map((item) => {
                            return (<li className="list-group-item"> { item.ability.name }</li>)
                        }) }
                    </ul>
                </div>

            </div>
        </div>
    </div>)
}