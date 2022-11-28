export default function Letras(props){
    const {chutes, setChutes, alfabeto, iniciarJogo}= props
    function armazenarChutes(letra){
        if ( iniciarJogo && !chutes.includes(letra)){
            setChutes([...chutes, letra])
        }
    }
    return(
        <ul className="teclado">
            {alfabeto.map((letra)=> 
            <li className={`letra ${iniciarJogo && !chutes.includes(letra)? "habilitar-letra" : ""}`} onClick={()=>armazenarChutes(letra)}>
                {letra.toUpperCase()}
            </li>)}
        </ul>
    )
}