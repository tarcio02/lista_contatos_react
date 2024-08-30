import { StyleInput } from "./style"

type props = {
    tipo: string;
    funcao: string
}
const Input: React.FC<props> = ({tipo, funcao}) => {
    return (
        <StyleInput type={tipo} placeholder={funcao} >
        </ StyleInput>
    )
}

export default Input