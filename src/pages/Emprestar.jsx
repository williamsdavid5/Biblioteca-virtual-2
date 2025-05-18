import './emprestar.css'
import LivroElemento from '../Components/LivroElemento'
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Emprestar() {
    const [livros, setLivros] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [pesquisa, setPesquisa] = useState('');

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

        )
    }

    return (
        <div id="container">

            <input
                type="text"
                placeholder='Pesquise por nome ou autor'
                onChange={(e) => setPesquisa(e.target.value)}
            />


            {livros
                .filter(livro => {
                    const texto = pesquisa.toLowerCase();
                    return (
                        livro.nome.toLowerCase().includes(texto) ||
                        livro.autor.toLowerCase().includes(texto)
                    )
                })
                .sort((a, b) => a.nome.localeCompare(b.nome))
                .map(livro => (
                    <LivroElemento key={livro.id} livro={livro} atualizarLivros={fetchLivros} />
                ))}

            <div id='divImgEsquerda'>
                <img src="src/assets/images/moçaLivro.png" alt="" id='imgEsquerda' />
            </div>
            <div id='divImgDireita'>
                <img id='imgDireita' src="src/assets/images/pilhaLivros2.png" alt="" />
            </div>
        </div>
    )
}