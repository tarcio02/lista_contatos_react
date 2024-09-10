import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

type ContatoState = {
    itens: Contato[]
};

const initialState: ContatoState = {
    itens: [
        {
            nome: 'Tarcio',
            numero: '45613798',
            email: 'tarciogbteixeira@gmail.com',
            id: 1,
        },
        {
            nome: 'João',
            numero: '852654',
            email: 'joao@email.com',
            id: 2,
        },
        {
            nome: 'Pedro',
            numero: '321456',
            email: 'pedro@mail.com',
            id: 3,
        },
    ]
}

const contatoSlice = createSlice({
    name: 'contato',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<Number>) => {
            state.itens = state.itens.filter((contato) => contato.id !== action.payload)
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexContato = state.itens.findIndex(ctt => ctt.id === action.payload.id)
            if(indexContato >= 0) {
                state.itens[indexContato] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Contato>) => {
            const existeContato = state.itens.find(ctt => ctt.nome.toLowerCase() === action.payload.nome.toLowerCase())
            if(existeContato) {
                alert('Jà existe um contato com esse nome')
            } else{
                state.itens.push(action.payload)
            }
        }
    }
});

export const { remover, editar, cadastrar } = contatoSlice.actions;
export default contatoSlice.reducer;