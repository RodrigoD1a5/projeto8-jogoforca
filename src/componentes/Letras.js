export default function Letras(props) {
    const { ganhou,perdeu , letrasDesabilitadas, setLetrasDesabilitadas, palavraEscolhida, chutes, setChutes, alfabeto, iniciarJogo, erros, setErros, setTerminarJogo } = props
    

    let verificarSeGanhou = []
    for (let i = 0; i < palavraEscolhida.length; i++) {
        verificarSeGanhou.push(true)
    }
    if ((palavraEscolhida.map((l) => letrasDesabilitadas.includes(l)).toString()) === verificarSeGanhou.toString() && letrasDesabilitadas.length > 1) {
        ganhou()
    }


    function armazenarChutes(letra) {

        if (iniciarJogo && !chutes.includes(letra) && erros < 6) {
            setChutes([...chutes, letra])
            setLetrasDesabilitadas([...letrasDesabilitadas, letra])

            let verificarSeGanhou = []
            for (let i = 0; i < palavraEscolhida.length; i++) {
                verificarSeGanhou.push(true)
            }
            if (!palavraEscolhida.includes(letra)) {
                setErros(erros + 1)

                if (erros === 5) {
                    perdeu()
                    setChutes(palavraEscolhida)
                }
            }
        }
    }
    return (
        <ul className="teclado">
            {alfabeto.map((letra) =>
                <li className={`letra ${iniciarJogo && !letrasDesabilitadas.includes(letra) ? "habilitar-letra" : ""}`} onClick={() => armazenarChutes(letra)}>
                    {letra.toUpperCase()}
                </li>)}
        </ul>
    )
}