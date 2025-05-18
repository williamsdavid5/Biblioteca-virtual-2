import './gerenciar.css';
import { useEffect, useState } from 'react';
import api from '../services/api';
import ElementoGerenciar from '../Components/ElementoGerenciar';
import { useNavigate } from 'react-router-dom';
import ModalGerenciar from '../Components/ModalGerenciar';

import PilhaLivros from '../assets/images/pilhaLivros.png';
import MeninaLivro from '../assets/images/meninaLivro.png';

export default function Gerenciar() {
    const [livros, setLivros] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [pesquisa, setPesquisa] = useState('');

    const [livroSelecionado, setLivroSelecionado] = useState(null);
    const [modalAberto, setModalAberto] = useState(false);

    function abrirModal(livro = null) {
        setLivroSelecionado(livro);
        setModalAberto(!modalAberto);
    }

    const navigate = useNavigate();

    async function fetchLivros() {
        try {
            const response = await api.get('/livros');
            setLivros(response.data);
            setCarregando(false);
        } catch (error) {
            console.log('Erro ao buscar livros: ', error);
            alert('Erro ao buscar livros');
        }
    }

    useEffect(() => {
        fetchLivros();
    }, []);

    if (carregando) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="https://i.gifer.com/VAyR.gif" id={'loadingGif'} alt="" />
                <p style={{ marginTop: '15px' }}>Resgatando dados</p>
            </div>
        );
    }

    return (
        <>
            <div id="containerGerenciar">
                <div id='divInputGerenciar'>
                    <button
                        id='botaoVoltar'
                        onClick={() => {
                            navigate('/');
                        }}
                    >Voltar</button>
                    <input
                        id='inputGerenciar'
                        type="text"
                        placeholder='Pesquise por nome ou autor'
                        onChange={(e) => setPesquisa(e.target.value)}
                    />
                    <button
                        id='botaoNovo'
                        onClick={() => abrirModal(null)}
                    >Novo</button>
                </div>

                <div className='gradeLivros'>
                    {livros
                        .filter(livro => {
                            const texto = pesquisa.toLowerCase();
                            return (
                                livro.nome.toLowerCase().includes(texto) ||
                                livro.autor.toLowerCase().includes(texto)
                            );
                        })
                        .sort((a, b) => a.nome.localeCompare(b.nome))
                        .map(livro => (
                            <ElementoGerenciar key={livro.id} livro={livro} atualizarLivros={fetchLivros} onclick={() => abrirModal(livro)} />
                        ))}
                </div>

                {modalAberto && (
                    <ModalGerenciar
                        fecharModal={() => {
                            setModalAberto(false);
                        }}
                        livro={livroSelecionado}
                        atualizarLivros={fetchLivros}
                    ></ModalGerenciar>
                )}

                <div id='divImgEsquerda'>
                    <img src={PilhaLivros} alt="" id='imgEsquerda' />
                </div>
                <div id='divImgDireita'>
                    <img id='imgDireita' src={MeninaLivro} alt="" />
                </div>
            </div>
        </>
    );
}