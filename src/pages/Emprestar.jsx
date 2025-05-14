import './emprestar.css'
import LivroElemento from '../Components/LivroElemento'
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Emprestar() {
    const [livros, setLivros] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function fetchLivros() {
            try {
                const response = await api.get('/livros');
                setLivros(response.data);
                setCarregando(false);
                console.log(livros)
            } catch (error) {
                console.log('Erro ao buscar livros: ', error);
            }
        }

        fetchLivros();

    }, []);

    if (carregando) {
        return <img src="https://i.gifer.com/VAyR.gif" id={'loadingGif'} alt="" />
    }

    return (
        <div id="container">
            <input type="text" placeholder='Pesquisar' />
            {livros.map((livro) => {
                return <LivroElemento key={livro.id} livro={livro} />
            })}
        </div>
    )
}