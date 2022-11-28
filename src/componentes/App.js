import Jogo from "./Jogo";
import palavras from "../palavras";
import Letras from "./Letras";
import Chute from "./Chute";
import { useState } from "react"

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [palavraEscolhida, setPalavraEscolhida] = useState([])
    const [iniciarJogo, setIniciarJogo] = useState(false)
    const [chutes, setChutes] = useState([])
    const [erros, setErros] = useState(0)
    const [terminarJogo, setTerminarJogo] = useState("")
    const [letrasDesabilitadas, setLetrasDesabilitadas] = useState([])
    const [corDaPalavra, setCorDaPalavra] = useState("")
    const [chutarPalavra, setChutarPalavra] = useState("")

    function mudarcorDaPalavraEfinalizarJogo() {
        setIniciarJogo(false)
        if (terminarJogo === "ganhou") {
            setCorDaPalavra("verde")
        }
        else {
            setCorDaPalavra("vermelho")
        }
    }
    function ganhou() {
        setTerminarJogo("ganhou")
        mudarcorDaPalavraEfinalizarJogo()
    }

    function perdeu() {
        setTerminarJogo("perdeu")
        mudarcorDaPalavraEfinalizarJogo()
    }
    console .log(palavraEscolhida.toString())
    return (
        <div className="conteudo">
            <Jogo
                corDaPalavra={corDaPalavra}
                palavraEscolhida={palavraEscolhida}
                palavras={palavras}
                setPalavraEscolhida={setPalavraEscolhida}
                setIniciarJogo={setIniciarJogo}
                chutes={chutes}
                erros={erros}
            />
            <Letras
                ganhou={ganhou}
                perdeu={perdeu}
                letrasDesabilitadas={letrasDesabilitadas}
                setLetrasDesabilitadas={setLetrasDesabilitadas}
                palavraEscolhida={palavraEscolhida}
                chutes={chutes}
                setChutes={setChutes}
                alfabeto={alfabeto}
                iniciarJogo={iniciarJogo}
                erros={erros}
                setErros={setErros}
                setTerminarJogo={setTerminarJogo}
            />
            <Chute
                setChutes={setChutes}
                ganhou={ganhou}
                perdeu={perdeu}
                palavraEscolhida={palavraEscolhida}
                chutarPalavra={chutarPalavra}
                setChutarPalavra={setChutarPalavra}
                iniciarJogo={iniciarJogo}
                setCorDaPalavra={setCorDaPalavra}
            />

        </div>
    )
}