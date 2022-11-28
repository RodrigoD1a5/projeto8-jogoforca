import Jogo from "./Jogo";
import palavras from "../palavras";
import Letras from "./Letras";
import Chute from "./Chute";
import { useState } from "react"

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [palavraEscolhida, setPalavraEscolhida] = useState("")
    const [iniciarJogo, setIniciarJogo] = useState(false)
    const [chutes, setChutes] = useState([])
    console.log(palavraEscolhida);
    console.log(iniciarJogo)
    console.log(chutes)


    return (
        <div className="conteudo">
            <Jogo
                palavraEscolhida={palavraEscolhida}
                palavras={palavras}
                setPalavraEscolhida={setPalavraEscolhida}
                setIniciarJogo={setIniciarJogo}
                chutes={chutes}
            />
            <Letras
                chutes={chutes}
                setChutes={setChutes}
                alfabeto={alfabeto}
                iniciarJogo={iniciarJogo} />
            <Chute
                iniciarJogo={iniciarJogo}
                chutes={chutes}
                setChutes={setChutes} />

        </div>
    )
}