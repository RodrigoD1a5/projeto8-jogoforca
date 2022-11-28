import Jogo from "./Jogo";
import palavras from "../palavras";
import Letras from "./Letras";
import Chute from "./Chute";
import { useState } from "react"

export default function App() {
    const imagens = ["forca0.png","forca1.png","forca2.png","forca3.png","forca4.png","forca5.png","forca6.png"]
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [palavraEscolhida, setPalavraEscolhida] = useState([])
    const [iniciarJogo, setIniciarJogo] = useState(false)
    const [chutes, setChutes] = useState([])
    const [erros, setErros] = useState(0)

  


    return (
        <div className="conteudo">
            <Jogo
                palavraEscolhida={palavraEscolhida}
                palavras={palavras}
                setPalavraEscolhida={setPalavraEscolhida}
                setIniciarJogo={setIniciarJogo}
                chutes={chutes}
                erros={erros}
            />
            <Letras
                palavraEscolhida={palavraEscolhida}
                chutes={chutes}
                setChutes={setChutes}
                alfabeto={alfabeto}
                iniciarJogo={iniciarJogo}
                erros={erros}
                setErros={setErros} />
            <Chute
                iniciarJogo={iniciarJogo}
                chutes={chutes}
                setChutes={setChutes} />

        </div>
    )
}