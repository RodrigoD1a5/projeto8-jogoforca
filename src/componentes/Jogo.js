
export default function Jogo(palavras) {
    console.log(palavras.palavras[180])
    return (
        <div className="jogo">
            <div className="imagem">
                <img src="assets/forca0.png" />
            </div>
            <div className="botao-palavra">
                <button>Escolher Palavra</button>
                <p>quarentena</p>
            </div>
        </div>
    )
}