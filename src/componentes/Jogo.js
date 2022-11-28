
export default function Jogo(props) {

    function escolherPalavra(palavras) {
        if (props.palavraEscolhida === "") {
            const palavra = palavras[Math.floor(Math.random() * palavras.length)]

            props.setPalavraEscolhida(palavra)
            props.setIniciarJogo(true)
        }
    }
    const listaDeCaracteres = props.palavraEscolhida.split("")
    return (
        <div className="jogo">
            <div className="imagem">
                <img src="assets/forca0.png" />
            </div>
            <div className="botao-palavra">
                <button onClick={() => escolherPalavra(props.palavras)}>Escolher Palavra</button>
                <p>
                    {listaDeCaracteres.map((c) =>
                        <span>_</span>)}
                </p>
            </div>
        </div>
    )
}