import Jogo from "./Jogo";
import palavras from "../palavras";
import Letras from "./Letras";

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="conteudo">
            <Jogo palavras={palavras}/>
            <ul className="teclado">
                    {alfabeto.map((l)=> <Letras letra={l}/>)}
            </ul>
        
        </div>
    )
}