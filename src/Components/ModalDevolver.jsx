import './modalEmprestar.css';

export default function ModalDevolver({ onClose, onConfirm }) {
    return (
        <div id='modalEmprestarBack' onClick={onClose}>
            <div id='modalEmprestar' onClick={(e) => e.stopPropagation()}>
                <h1>Devolver?</h1>
                <p style={{ textAlign: 'center' }}>Obrigado por devolver! Mesmo você sendo o único usuário :)</p>
                <div id='modalBotoes'>
                    <button className='modalBotao' id='botaoConfirmar' onClick={onConfirm}>Devolver</button>
                    <button className='modalBotao' id='botaoCancelar' onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}
