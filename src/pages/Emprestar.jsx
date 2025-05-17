import './emprestar.css'
import LivroElemento from '../Components/LivroElemento'
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Emprestar() {
    const [livros, setLivros] = useState([]);
    const [carregando, setCarregando] = useState(true);

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
            <input type="text" placeholder='Pesquisar' />
            {livros.map((livro) => {
                return <LivroElemento key={livro.id} livro={livro} atualizarLivros={fetchLivros} />
            })}
        </div>
    )
}