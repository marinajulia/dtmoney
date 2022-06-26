import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import close from '../../assets/close.png';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import { useState } from 'react';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    const [type, setType] = useState('deposit');
    
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={close} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder="Título" />
                <input placeholder="Valor" type="number"/>

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button" 
                        onClick={()=> setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                        >
                            <img src={incomeImg} alt="Entrada" />
                            <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button" 
                        onClick={()=> setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                        >
                            <img src={outcomeImg} alt="Saída" />
                            <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>
      </Modal>
    );
}