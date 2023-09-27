import firebaseApp from './config'
import { useState, useEffect } from 'react';

import { getFirestore, 
    collection, 
    getDocs,
    orderBy,
    query ,
    doc,
    updateDoc,
    addDoc,
    deleteDoc,
    where
} from "firebase/firestore";

import Login from './Login';

const db = getFirestore(firebaseApp);
const colTarefas = collection(db, "tarefas");



function Tarefas(props)
{
    const [listaTarefas, setListaTarefas] = useState([]);
    const [novo, setNovo] = useState("");
    const [carregado, setCarregado] = useState(false);



    async function listar()
    {
        let tarefas = sessionStorage.getItem("tarefas");

        if (tarefas)
        {
            setListaTarefas( JSON.parse(tarefas) );    
        } else 
        {
            
            setListaTarefas([]);
            
            const filtro = query(colTarefas, 
                where("usuario", "==", props.usuario.email), 
                orderBy("dataCadastro"));
            const retorno = await getDocs(filtro);
            retorno.forEach((item) => {
                let dados = item.data();
                dados.id = item.id;
                listaTarefas.push(dados)
                // setListaTarefas([...listaTarefas]);
                // executa somente depois do render de html ter concluido
                setListaTarefas((listaTarefas) => [...listaTarefas, dados]);
                sessionStorage.setItem("tarefas", JSON.stringify(listaTarefas))
            })
        }
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
    
    async function add()
    {
        let novaTarefa = {
            tarefa: novo,
            feito: false,
            dataCadastro: new Date(),
            usuario: props.usuario.email
        };
        
        let docCadastrado = await addDoc(colTarefas, novaTarefa);
        novaTarefa.id = docCadastrado.id;
        listaTarefas.push(novaTarefa);
        
        setListaTarefas([...listaTarefas]);
        
    }
    
    async function del(ev)
    {
        let id = ev.target.getAttribute("listaid");
        let selecionado = doc(db, 'tarefas', id);
        console.log(id, listaTarefas)
        await deleteDoc(selecionado);
        
        let idx = listaTarefas.findIndex((item) => {
            return item.id === id;
        });
        listaTarefas.splice(idx, 1);
        setListaTarefas([...listaTarefas]);
        
    }
    
    // Executa apos o componente ser renderizado
    useEffect(()=> {
        if (carregado === false) {
            
            listar();
            setCarregado(true);
        }
    }, [ carregado ]);

    function sair()
    {
        sessionStorage.clear();
        props.logado(false);

    }
    
    return (
        <div className='row'>
      <div className='col'>

        <h1>Lista de Tarefas</h1>

        <p className='text-end'>Olá {props.usuario.nome} [<a href='#' onClick={sair}>Sair</a>]</p>

        <div className='input-group'>
            <input onChange={(e) => setNovo(e.target.value)} className='form-control' type='text' />
            <button onClick={add} className='btn btn-outline-primary'  type='button'>Add</button>
        </div>

        <ul className="list-group mt-4">
            { 
                listaTarefas.map((item) => {
                    
                    let cssLabel = "form-check-label";
                    cssLabel = (item.feito === true)? cssLabel + " text-decoration-line-through" : cssLabel;
                    
                    let dataFim = (item.dataLimite)? new Date(item.dataLimite.seconds * 1000) : "";
                    
                    let dataAtual = new Date();
                    
                    let atrasado = "";
                    if (item.dataLimite && item.feito === false && dataAtual > dataFim ){
                        atrasado = <span className="badge text-bg-danger">Atrasado</span>;
                    }

                    return (
                        <li className="list-group-item " key={item.id}>
                        <input 
                            className="form-check-input me-1" 
                            type="checkbox"
                            onChange={ alternaFeito } 
                            value={item.id} 
                            checked={item.feito} />
                        <label className={cssLabel} >{ item.tarefa }</label>
                        <div className="d-flex justify-content-end">
                            <span className="badge text-bg-primary">{ dataFim.toLocaleString() }</span>
                            { atrasado }
                            <input onClick={ del }
                                listaid={item.id}
                                type='button'
                                className='btn btn-outline-danger btn-sm' 
                                value="DEL"
                                />
                        </div>
                    </li>
                    ) 
                })
            }
        </ul>

      </div>
    </div>
    )
}

export default function Permissao()
{
    const [logado, setLogado] = useState(false);

    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));

    useEffect(()=>{
        if (usuarioLogado) {
            setLogado(true);
        }
    })

    return (
        <div>
        { (logado == false)
            ? <Login logado={setLogado} />
            : <Tarefas usuario={usuarioLogado} logado={setLogado} />
        }
        </div>
    )
}