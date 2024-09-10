import React from "react";
import { useSelector } from "react-redux";
import Contato from "../../components/Contato/Contato";
import { StyleLista} from "./style";
import { RootReducer } from "../../store";

function Lista() {
    const { itens } = useSelector((state: RootReducer) => state.contatos)

    return(
        <StyleLista >
            <h2>Lista de contatos:</h2>
            <ul className="listagem" >
                {itens.map( (ctt) => (
                    <li key={ctt.numero} >
                        <Contato 
                        id={ctt.id}
                        nome={ctt.nome}
                        numero={ctt.numero}
                        email={ctt.email}
                        />
                    </li> 
                ))}
            </ul>
        </StyleLista>
    )
}

export default Lista