
export default function Jogo(props) {
    const{ corDaPalavra , palavraEscolhida, palavras, setPalavraEscolhida, setIniciarJogo, chutes, erros} = props
    function escolherPalavra(palavras) {
        if  (!palavraEscolhida[0]) {
            const palavra = palavras[Math.floor(Math.random() * palavras.length)]
            setPalavraEscolhida(palavra.split(""))
            setIniciarJogo(true)
        }
    }
    return (
        <div className="jogo">
            <div className="imagem">
                <img src={`assets/forca${erros}.png`} />
            </div>
            <div className="botao-palavra">
                <button onClick={() => escolherPalavra(palavras)}>Escolher Palavra</button>
                <p>
                    {palavraEscolhida.map((c) =>
                        <span className={corDaPalavra}>{chutes.includes(c)? c :"_"}</span>)}
                </p>
            </div>
        </div>
    )
}