import './Home.css'
import livrosImg from '../assets/images/livrosPrateleira.png'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="container">
            <main>
                <p>Bem vindo(a) a nossa</p>
                <h1>Biblioteca Virtual</h1>
                <p>Você deveria ter feito seu login antes dessa tela, mas o nosso dev não programou essa função :(</p>
                <div id='botoesFuncoes'>
                    <button onClick={() => navigate('/emprestar')}>Emprestar</button>
                    <button onClick={() => navigate('/gerenciar')}>Gerenciar</button>
                </div>
            </main>
            <div id='imagem'>
                <img src={livrosImg} alt="" className='animacao' />
            </div>
        </div>
    )
}