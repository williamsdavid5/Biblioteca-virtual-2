import './modalGerenciar.css';
import Switch from './Switch'
import { useState } from 'react';

export default function ModalGerenciar({ fecharModal, livro }) {

    useState

    return (
        <div id="modalGerenciarBackground">
            <div id='modalGrenciarJanela'>
                <p>Título</p>
                <input
                    className="inputForm"
                    type="text"
                    placeholder="Título do livro"
                    name=""
                    id=""
                    defaultValue={livro?.nome}
                />
                <p>Autor</p>
                <input
                    type="text"
                    placeholder='Nome do autor'
                    className='inputForm'
                    defaultValue={livro?.autor}
                />
                <p>Ano de publicação</p>
                <input
                    type="text"
                    placeholder='Apenas números por favor'
                    className='inputForm'
                    defaultValue={livro?.ano_publicacao}
                />
                <p>Descrição</p>
                <textarea
                    name=""
                    id="areaDeDescricao"
                    placeholder='Uma breve descrição do livro'
                    defaultValue={livro?.descricao}
                ></textarea>
                <p>Disponível</p>
                <Switch bool={livro ? livro.disponivel : true}></Switch>
                <div id='divBotoesModalGerenciar'>
                    <button>Salvar</button>
                    <button onClick={fecharModal}>Cancelar</button>
                </div>
            </div>

        </div>
    )
}