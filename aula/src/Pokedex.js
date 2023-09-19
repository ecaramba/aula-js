import { useState } from 'react';
import axios from 'axios'

export default function Pokedex()
{

    const [nomePesquisa, setNomePesquisa] = useState("");
    const [pokemon, setPokemon] = useState({});
    const [temErro, setTemErro] = useState(false)

    
    async function pesquisar()
    {
        try {
            setTemErro(false);
            let retorno = await axios.get("https://pokeapi.co/api/v2/pokemon/" + nomePesquisa );
            setPokemon(retorno.data);
        } catch (erro)
        {
            setTemErro(true);
            
        }
    }
    
    //let alerta = "";
    // if (temErro === true)
    // {
    //     alerta =   <div className="alert alert-danger mt-4" role="alert">
    //      O pokemon informado não foi encotrado!
    //     </div>;
    // } else {
    //     alerta = "";
    // }

    // if ternario
    // let alerta = (temErro === true)? <div className="alert alert-danger mt-4" role="alert">
    //     O pokemon informado não foi encotrado!</div> : "";


    let card = "";

    if (pokemon.name)
    {
        card =  <div className="card text-bg-danger mt-4">
                <div className="card-header">Pokedex</div>
                <img src={ pokemon.sprites.other.dream_world.front_default } alt='Carinha do bichinho' />
                
                <div className="card-body">
                    <h5 className="card-title"> { pokemon.name } </h5>
                    <p className="card-text">
                
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Peso: { pokemon.weight } </li>
                    <li className="list-group-item">Altura: { pokemon.height }</li>
                    <li className="list-group-item disabled">Habilidades</li>
                    { pokemon.abilities.map((item, index) => {
                        return (<li className="list-group-item" key={ index }> { item.ability.name }</li>)
                    }) }
                </ul>
            </div>
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
                { (temErro === true)? 
                <div className="alert alert-danger mt-4" role="alert">
                    O pokemon informado não foi encotrado!
                </div> : "" }
                { card }

            </div>
        </div>
    </div>)
}