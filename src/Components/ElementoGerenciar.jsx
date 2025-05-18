
import './elementoGerenciar.css'


export default function ElementoGerenciar({ livro, atualizarLivros, onclick }) {

    return (
        <div className="blocoGerenciar" onClick={onclick}>
            <p style={{ fontWeight: 700, color: livro.disponivel ? 'black' : 'red' }}>{livro.nome}
                <br /><span>{livro.autor}</span>
            </p>
        </div>
    )

}