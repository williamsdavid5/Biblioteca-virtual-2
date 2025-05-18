import { useState } from "react"
import './elementoGerenciar.css'
import api from "../services/api"

export default function ElementoGerenciar({ livro, atualizarLivros }) {
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
            <div className="blocoGerenciar">
                <p style={{ fontWeight: 700 }}>{livro.nome}
                    <br /><span>{livro.autor}</span>
                </p>
            </div>
        </>
    )

}