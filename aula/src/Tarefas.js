import firebaseApp from './config'
import { useState } from 'react';

import { getFirestore, 
    collection, 
    getDocs,
    orderBy,
    query 
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

const colTarefas = collection(db, "tarefas");

export default function Tarefas()
{
    const [listaTarefas, setListaTarefas] = useState([]);

    async function listar()
    {
        const filtro = query(colTarefas, orderBy("dataCadastro"));
        const retorno = await getDocs(filtro);
        retorno.forEach((item) => {
            console.log(item.data())
        })
    }

    return (<div>
        <h1>Lista de Tarefas</h1>
        <button onClick={listar}>listar</button>
    </div>)
}