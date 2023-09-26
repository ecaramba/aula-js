
const css = {
    card: {
        height: 400
    },
    input: {
        marginTop: 20
    }
}

export default function Login()
{
    return (
        <div style={css.card} 
            className="d-flex justify-content-center align-items-center">
            <div className="col-6 mt-4">

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>

                        <form>

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