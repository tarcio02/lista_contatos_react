import styled from "styled-components"

export const StyleLista = styled.div`
    border: dashed 2px black;
    padding: 8px;

    .listagem{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 8px;
        list-style: none;
    }
` 