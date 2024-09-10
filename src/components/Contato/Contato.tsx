
import { useDispatch } from "react-redux";
import { StyleContato } from "./style";
import { remover, editar } from "../../store/reducers/contato"
import ContatoClass from "../../models/Contato";
import { useState } from "react"

interface ContatoProps extends ContatoClass {}

const Contato: React.FC<ContatoProps> = ({nome: nomeOriginal, email: emailOriginal, numero: numeroOriginal, id}) => {
    const dispatch = useDispatch()
    const [editando, setEditando] = useState(false);
    const [nome, setNome] = useState(nomeOriginal);
    const [email, setEmail] = useState(emailOriginal);
    const [numero, setNumero] = useState(numeroOriginal);

    function cancelaEdicao() {
        setEditando(false);
        setNome(nomeOriginal);
        setEmail(emailOriginal);
        setNumero(numeroOriginal)
    }

    return (
        <StyleContato>
            {editando ? (
                <>
                    <div className="info">
                        <input value={nome} onChange={e => setNome(e.target.value)}></input>
                        <input value={numero} onChange={e => setNumero(e.target.value)}></input>
                        <input value={email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className="btn">
                        <button onClick={() => {dispatch(editar({
                            nome,
                            numero,
                            email,
                            id
                        }))
                        setEditando(false)
                        }}>
                            Salvar
                        </button>
                        <button onClick={cancelaEdicao}>
                            Cancelar
                        </button>
                    </div>
                </>
            ):(
            <>
                <div className="info">
                    <p>Nome: {nome}</p>
                    <p>Número: {numero}</p>
                    <p>Email: {email}</p>
                </div>
                <div className="btn">
                    <button onClick={ () => setEditando(true)}>
                        Editar
                    </button>
                    <button onClick={() => dispatch(remover(id))}>
                        Excluir
                    </button>
                </div>
            </>
            )}
        </StyleContato>
    )
}

export default Contato