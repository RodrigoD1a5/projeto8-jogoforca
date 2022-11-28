import Jogo from "./Jogo";
import palavras from "../palavras";
import Letras from "./Letras";
import Chute from "./Chute";
import { useState } from "react"

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [palavraEscolhida, setPalavraEscolhida] = useState("")
    const [iniciarJogo, setIniciarJogo]=useState(false)
    console.log(palavraEscolhida);
    console.log(iniciarJogo)
    

    return (
        <div className="conteudo">
            <Jogo 
            palavraEscolhida={palavraEscolhida}
            palavras={palavras} 
            setPalavraEscolhida={setPalavraEscolhida}
            setIniciarJogo={setIniciarJogo}
            />
            <ul className="teclado">
                {alfabeto.map((l)=> <Letras 
                letra={l}
                iniciarJogo={iniciarJogo}/>)}
            </ul>
            <Chute
            iniciarJogo={iniciarJogo}/>
        
        </div>
    )
}