import { useDispatch } from "react-redux";
import { StyleContato } from "./style";
import { remover } from "../../store/reducers/contato"
import ContatoClass from "../../models/Contato";

type props = ContatoClass

const Contato: React.FC<props> ({nome, email, numero, id}) {
    const dispatch = useDispatch()

    return (
        <StyleContato>
            <div className="info">
                <p>Nome: {nome}</p>
                <p>Número: {numero}</p>
                <p>Email: {email}</p>
            </div>
            <div className="btn" >
                <button>Editar</button>
                <button onClick={() => dispatch(remover(id))}>Excluir</button>
            </div>
        </StyleContato >
    )
}

export default Contato