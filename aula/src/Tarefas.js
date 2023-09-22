import firebaseApp from './config'
import { useState } from 'react';

import { getFirestore, 
    collection, 
    getDocs,
    orderBy,
    query ,
    doc,
    updateDoc
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
            let dados = item.data();
            dados.id = item.id;
            listaTarefas.push(dados)
            console.log(dados)
            setListaTarefas([...listaTarefas]);
        })
    }

    async function alternaFeito(ev)
    {
        let id = ev.target.value;

        let selecionado = listaTarefas.findIndex((item) => {
            return item.id === id
        })        

        listaTarefas[selecionado].feito = !listaTarefas[selecionado].feito;
        setListaTarefas([...listaTarefas]);

        let tarefaAlterar = doc(db, 'tarefas', id);
        await updateDoc(tarefaAlterar, listaTarefas[selecionado]);
    }

    return (
    <div className='row'>
      <div className='col'>

        <h1>Lista de Tarefas</h1>
        <button onClick={listar} className='btn btn-primary'>listar</button>

        <ul className="list-group mt-4">
            { 
                listaTarefas.map((item) => {

                    let cssLabel = "form-check-label";
                    cssLabel = (item.feito === true)? cssLabel + " text-decoration-line-through" : cssLabel;

                    return (
                    <li className="list-group-item " key={item.id}>
                        <input 
                            className="form-check-input me-1" 
                            type="checkbox"
                            onChange={ alternaFeito } 
                            value={item.id} 
                            checked={item.feito} />
                        <label className={cssLabel} >{ item.tarefa }</label>
                    </li>
                    ) 
                })
            }
        </ul>

      </div>
    </div>
    )
}