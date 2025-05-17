import './modalEmprestar.css'

export default function ModalEMprestar({ onClose, onConfirm }) {
    return (
        <div id='modalEmprestarBack' onClick={onClose}>
            <div id='modalEmprestar' onClick={(e) => e.stopPropagation()}>
                <h1>Emprestar?</h1>
                <p>Não deveria ser tão simples, mas o nosso dev fez assim</p>
                <div id='modalBotoes'>
                    <button className='modalBotao' id='botaoConfirmar' onClick={onConfirm}>Emprestar</button>
                    <button className='modalBotao' id='botaoCancelar' onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}