
export default function Jogo(props) {
    const{palavraEscolhida, palavras, setPalavraEscolhida, setIniciarJogo, chutes} = props
    function escolherPalavra(palavras) {
        if (palavraEscolhida === "") {
            const palavra = palavras[Math.floor(Math.random() * palavras.length)]

            setPalavraEscolhida(palavra)
            setIniciarJogo(true)
        }
    }
    const listaDeCaracteres = palavraEscolhida.split("")
    return (
        <div className="jogo">
            <div className="imagem">
                <img src="assets/forca0.png" />
            </div>
            <div className="botao-palavra">
                <button onClick={() => escolherPalavra(palavras)}>Escolher Palavra</button>
                <p>
                    {listaDeCaracteres.map((c) =>
                        <span>{chutes.includes(c)? c :"_"}</span>)}
                </p>
            </div>
        </div>
    )
}