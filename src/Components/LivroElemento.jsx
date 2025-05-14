import { useState } from "react"
import './livroElemento.css'

export default function LivroElemento({ livro }) {

    const [expandido, setExpandido] = useState(false);

    if (!expandido) {
        return (
            <div id="bloco">
                <p style={{ fontWeight: 700 }}>{livro.nome}</p>
                <p style={{ color: livro.disponivel ? 'black' : 'red' }} id="disponivel">{livro.disponivel ? 'Disponível!' : 'Indisponível'}</p>
            </div>
        )
    }
}