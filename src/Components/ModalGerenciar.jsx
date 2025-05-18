import './modalGerenciar.css';
import Switch from './Switch'
import { useState, useEffect } from 'react';
import api from '../services/api';

export default function ModalGerenciar({ fecharModal, livro, atualizarLivros }) {

    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [ano, setAno] = useState('');
    const [descricao, setDescricao] = useState('');
    const [disponivel, setDisponivel] = useState(true);

    useEffect(() => {
        if (livro) {
            setNome(livro.nome);
            setAutor(livro.autor);
            setAno(livro.ano_publicacao);
            setDescricao(livro.descricao);
            setDisponivel(livro.disponivel);
        } else {
            setNome('');
            setAutor('');
            setAno('');
            setDescricao('');
            setDisponivel(true);
        }
    }, [livro]);

    async function salvarLivro() {
        const novoLivro = {
            nome,
            autor,
            ano_publicacao: ano,
            descricao,
            disponivel
        };

        try {
            if (livro) {
                await api.put(`/livros/${livro.id}`, novoLivro);
            } else {
                await api.post('/livros', novoLivro);
            }

            atualizarLivros();
            fecharModal();
        } catch (error) {
            console.log("erro ao salvar: ", error);
            alert('Erro ao salvar livro');
        }
    }

    async function excluirLivro() {
        const confirmacao = window.confirm("Tem certeza que deseja excluir este livro?");

        if (!confirmacao) return;

        try {
            await api.delete(`/livros/${livro.id}`);
            atualizarLivros();
            fecharModal();
        } catch (error) {
            console.log("Erro ao excluir livro: ", error);
            alert("Erro ao excluir livro");
        }
    }

    return (
        <div id="modalGerenciarBackground">
            <div id='modalGrenciarJanela'>
                <p>Título</p>
                <input
                    className="inputForm"
                    type="text"
                    placeholder="Título do livro"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <p>Autor</p>
                <input
                    type="text"
                    placeholder='Nome do autor'
                    className='inputForm'
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                />
                <p>Ano de publicação</p>
                <input
                    type="number"
                    placeholder='Apenas números por favor'
                    className='inputForm'
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                />
                <p>Descrição</p>
                <textarea
                    id="areaDeDescricao"
                    placeholder='Uma breve descrição do livro'
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                ></textarea>
                <div id='gerenciarControles'>
                    <p>Disponível:</p>
                    <Switch bool={disponivel} setBool={setDisponivel} />

                    {livro && (
                        <button id='botaoExcluir' onClick={excluirLivro}>Excluir</button>
                    )}


                </div>


                <div id='divBotoesModalGerenciar'>
                    <button id='botaoSalvarLivro' onClick={salvarLivro}>Salvar</button>
                    <button onClick={fecharModal}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}