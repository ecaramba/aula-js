import { useState } from "react";

export default function Ola(props)
{
    const [nome, setNome] = useState(props.nome);

    function alterar()
    {
        setNome("Manezinho");
    }

    // jsx
    return (
        <div>
            <h1>Olá { nome }!</h1>
            
            <button onClick={ alterar }>Alterar nome</button>
        </div>
    )
}

