import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Gerenciar() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        async function fetchLivros() {
            try {
                const response = await api.get('/livros');
                setLivros(response.data);

                console.log(livros);

            } catch (error) {
                console.log('Erro ao buscar livros: ', error);
            }
        }

        fetchLivros();

    })

    return <>Gerenciar</>
}