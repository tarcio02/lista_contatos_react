import styled from "styled-components";

export const StyleContato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 160px;
    border: solid 1px black;

    .info{
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 16px;
        padding: 4px;
        overflow-wrap: break-word;
        overflow-y: auto;
        p{
            background-color: #dcdde1;
        }
    }

    .btn{
        display: flex;
        width: 100%;
        height: 32px;
        border-top: solid 1px black;

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            border: none;
        }
    }
`