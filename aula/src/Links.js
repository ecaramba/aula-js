import Pokedex from './Pokedex';
import Ola from './Ola';

export default function Links() {
    let component = "";

    if (window.location.hash === '#pokedex')
    {
        component = <Pokedex />;
    } else if (window.location.hash === "#ola")
    {
        component = <Ola />
    }

    return (
        <div>
            | <a href="#pokedex">Pokedex</a> 
            | <a href="#cidades">Cidades</a> 
            | <a href="#ola">Ola</a> 

            {component}

        </div>
        
    )
}