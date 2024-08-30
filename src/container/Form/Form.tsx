import Input from "../../components/Input/Input";
import { StyleForm } from "./style";

function Form() {
    return(
        <StyleForm>
            <Input tipo="text" funcao="Nome" />
            <Input tipo="text" funcao="Email" />
            <Input tipo="text" funcao="Telefone" />
            <button className="btn" type="submit">Adicionar</button>
        </ StyleForm>
    )
}

export default Form