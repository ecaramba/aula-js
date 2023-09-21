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

    return (
    <div className='row'>
      <div className='col'>

        <h1>Lista de Tarefas</h1>
        <button onClick={listar} className='btn btn-primary'>listar</button>

        <ul className="list-group">
        <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
            <label className="form-check-label" >First checkbox</label>
        </li>
        <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
            <label className="form-check-label" >Second checkbox</label>
        </li>
        <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
            <label className="form-check-label" >Third checkbox</label>
        </li>
        </ul>

      </div>
    </div>
    )
}