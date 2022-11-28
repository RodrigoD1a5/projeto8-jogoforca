export default function Letras(props){
    const {palavraEscolhida, chutes, setChutes, alfabeto, iniciarJogo, erros, setErros}= props
    function armazenarChutes(letra){
        if ( iniciarJogo && !chutes.includes(letra) && erros < 6  ){
            setChutes([...chutes, letra])
            if(!palavraEscolhida.includes(letra)){
                setErros(erros + 1 )
            }
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