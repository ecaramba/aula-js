
export default function Pokedex()
{
    return (
    <div className="container">

        <div className="row justify-content-md-center">
            <div className="col-6 mt-4" >

                <div className="input-group">
                    <input type="text" placeholder="Nome ou ID" className="form-control"/>
                    <button className="btn btn-outline-danger" type="button">Pesquisar</button>
                </div>

                <div className="card text-bg-danger mt-4">
                    <div className="card-header">Pokedex</div>
                    <img src="https://placehold.co/300x200" />
                    
                    <div className="card-body">
                        <h5 className="card-title">Nome do bichinho</h5>
                        <p className="card-text">
                       
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">peso</li>
                        <li className="list-group-item">altura</li>
                        <li className="list-group-item">Habilidade</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>)
}