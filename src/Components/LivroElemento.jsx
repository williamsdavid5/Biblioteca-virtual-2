import { useState } from "react"
import './livroElemento.css'
import ModalEMprestar from "./modalEmprestar";
import ModalDevolver from "./ModalDevolver";
import api from "../services/api"

export default function LivroElemento({ livro, atualizarLivros }) {

    const [expandido, setExpandido] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);
    const [livroSelecionado, setLivroSelecionado] = useState(null);

    function fecharModal() {
        setModalAberto(false);
        setLivroSelecionado(null);
    }

    async function realizarAcao() {
        try {
            await api.put(`/livros/${livroSelecionado.id}`, {
                nome: livroSelecionado.nome,
                autor: livroSelecionado.autor,
                ano_publicacao: livroSelecionado.ano_publicacao,
                descricao: livroSelecionado.descricao,
                disponivel: !livroSelecionado.disponivel,
            });

            fecharModal();
            atualizarLivros();
        } catch (error) {
            console.error("Erro ao atualizar livro: ", error);
            alert("Erro ao atualizar livro");
        }
    }

    return (
        <>
            <div className={`bloco ${expandido ? 'expandido' : ''}`} onClick={() => setExpandido(!expandido)}>
                <p className={`${expandido ? 'titulo' : ''}`} style={{ fontWeight: 700 }}>{livro.nome}

                    {expandido && (
                        <>
                            <p>Autor: {livro.autor}<br />
                                Ano de publicação: {livro.ano_publicacao}<br />
                            </p>
                            <button
                                className={livro.disponivel ? 'botaoEmprestar' : 'botaoDevolver'}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLivroSelecionado(livro);
                                    setModalAberto(!modalAberto);
                                }}
                            >
                                {livro.disponivel ? 'Emprestar' : 'Devolver'}
                            </button>
                        </>

                    )}
                </p>

                <p style={{ color: livro.disponivel ? 'black' : 'red' }} className={`disponivel ${expandido ? 'disponivelExpandido' : ''}`}>

                    {expandido && (
                        <p>{livro.descricao}</p>
                    )}

                    {livro.disponivel ? 'Disponível!' : 'Indisponível'}</p>
            </div>
            {modalAberto && livroSelecionado && (
                livroSelecionado.disponivel ?
                    <ModalEMprestar onClose={fecharModal} onConfirm={realizarAcao} /> :
                    <ModalDevolver onClose={fecharModal} onConfirm={realizarAcao} />
            )}

        </>
    )

}