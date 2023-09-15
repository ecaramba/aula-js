
import { useState } from "react";

let css = {
    titulo: {
        fontWeight: "bold",
        display: "block",
        marginTop: "10px"
    }
};

export default function Cadastro()
{
    const [email,  setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [cidade, setCidade] = useState("")
    const [telefone, setTelefone] = useState("")

    function validacao() {
        
        if (email === "") {
            window.alert("O email é obrigatorio");
        }
        if (nome === "") {
            window.alert("O nome é obrigatorio");
        }
        if (telefone === "") {
            window.alert("O telefone é obrigatorio");
        }
        if (cidade === "") {
            window.alert("A cidade é obrigatorio");
        }

        let valTelefone = /\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}/;
        if (valTelefone.test(telefone) == false) {
            window.alert("O telefone esta num formato invalido")
        }

        let valEmail = /^[a-z0-9A-Z-_.]+@[a-z0-9]+.[a-z.]+$/;
        if (valEmail.test(email) == false)
        {
            window.alert("Email incorreto")
        }
    }

    return (
        <div>
            <h1>Cadastro</h1>

            <form>
                <label style={ css.titulo } >Email</label>
                <input type="text" onChange={ (evento) => setEmail(evento.target.value) }/>

                <label style={ css.titulo }>Nome</label>
                <input type="text" onChange={ (evento) => setNome(evento.target.value) } />

                <label style={ css.titulo }>Telefone</label>
                <input type="text" onChange={ (evento) => setTelefone(evento.target.value) } />

                <label style={ css.titulo }>Cidade</label>
                <select onChange={ (evento) => setCidade(evento.target.value) }>
                    <option> </option>
                    <option>Curitiba</option>
                    <option>Campinas</option>
                    <option>Pinhais</option>
                </select>

                <button style={ css.titulo } type="button" onClick={ validacao }>Confirmar</button>
            </form>
        </div>
    )
}