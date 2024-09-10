import { StyleInput } from "./style"

type props = {
    tipo: string;
    funcao: string
    valor: string
}
const Input: React.FC<props> = ({tipo, funcao, valor}) => {
    return (
        <StyleInput value={valor} type={tipo} placeholder={funcao} >
        </ StyleInput>
    )
}

export default Input