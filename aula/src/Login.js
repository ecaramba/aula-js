import firebaseApp from './config'
import { 
    getFirestore,
    getDocs,
    doc,
    query,
    where,
    collection,
    Firestore
 } from 'firebase/firestore';

 import sha1 from 'js-sha1'

import { useState } from 'react'

const db = getFirestore(firebaseApp);


const css = {
    card: {
        height: 400
    },
    input: {
        marginTop: 20
    }
}

export default function Login(props)
{

    const [erro, setErro] = useState(false);

    async function logar(ev)
    {
        setErro(false);

        // evita o compartamento padrão do elemento
        ev.preventDefault()
        let usuario = ev.target[0].value;
        let senha = ev.target[1].value;
        
        let registro = collection(db, "usuarios");

        let pesq = query(registro, 
            where("senha", "==", sha1(senha)),
            where("email", '==', usuario)
            )
        let retorno = await getDocs(pesq);

        if (retorno.empty === true) {
            console.log("usuario ou senha incorretos");
            setErro(true);
        } else {
            console.log("usuario logado")
            props.logado(true);

           sessionStorage.setItem("usuarioLogado", JSON.stringify(retorno.docs[0].data()));
        }

    }

    return (
        <div style={css.card} 
            className="d-flex justify-content-center align-items-center">
            <div className="col-6 mt-4">

                { (erro == true) 
                    ? <div className="alert alert-danger">Usuário ou Senha incorretos</div>
                    : ""
                }

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>

                        <form onSubmit={ logar }>

                            <div style={css.input}>
                                <label className="form-label">Usuário</label>
                                <input className="form-control" type="text" />
                            </div>

                            <div style={css.input}>
                                <label className="form-label">Senha</label>
                                <input className="form-control" type="password" />
                            </div>

                            <button className="btn btn-success mt-4" type="submit">Entrar</button>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}