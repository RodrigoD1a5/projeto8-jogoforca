export default function Chute(props) {
    const {setChutes, perdeu, ganhou ,palavraEscolhida,chutarPalavra,setChutarPalavra,iniciarJogo, setCorDaPalavra} = props 
    function chutar(){
        if (palavraEscolhida.join("")=== chutarPalavra){
            setCorDaPalavra("verde")
            setChutes(palavraEscolhida)

        }
        else{
            setCorDaPalavra("vermelho")
            setChutes(palavraEscolhida)

        }
    }
    console.log(chutarPalavra.split("").toString())

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input type="text" disabled={!iniciarJogo} value={chutarPalavra} onChange={e => setChutarPalavra(e.target.value)}/>
            <button onClick={() => chutar()}>
                Chutar
            </button>
        </div>
    )
}
