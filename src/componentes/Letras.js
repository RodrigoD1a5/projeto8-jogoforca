export default function Letras(props){
    return(
        <li className={`letra ${props.iniciarJogo? "habilitar-letra" : ""}`}>
            {props.letra.toUpperCase()}
        </li>
    )
}