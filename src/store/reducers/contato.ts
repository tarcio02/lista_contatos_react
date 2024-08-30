import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

type ContatoState = {
    itens: Contato[]
};

const initialState: ContatoState = {
    itens: [
        {
            nome: 'Tarcio',
            numero: 45613798,
            email: 'tarciogbteixeira@gmail.com',
            id: 1,
        },
        {
            nome: 'João',
            numero: 852654,
            email: 'joao@email.com',
            id: 2,
        },
        {
            nome: 'Pedro',
            numero: 321456,
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
        }
    }
});

export const { remover } = contatoSlice.actions;
export default contatoSlice.reducer;