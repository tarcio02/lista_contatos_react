import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { cadastrar } from "../../store/reducers/contato";
import Contato from "../../models/Contato";

import { StyleForm } from "./style";

function Form() {
    const dispatch = useDispatch;
    const [nome, setNome] =useState('')
    const [email, setEmail] =useState('')
    const [numero, setNumero] =useState('')

    const cadastrarCtt = (evento: FormEvent) => {
        evento.preventDefault()
        const contatoAdd = new Contato(nome, numero, email, 9 );
        dispatch(cadastrar(contatoAdd))
    }

    return(
        <StyleForm onSubmit={cadastrarCtt}>
            <input 
            value={nome}
            onChange={e => setNome(e.target.value)}
            type="text" placeholder="Nome"/>
            <input
            value={numero}
            onChange={e => setNumero(e.target.value)}
            type="text" placeholder="Telefone" />
            <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"placeholder="Email" />
            <button className="btn" type="submit">Adicionar</button>
        </ StyleForm>
    )
}

export default Form