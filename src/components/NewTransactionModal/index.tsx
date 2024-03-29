import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import close from '../../assets/close.png';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const {createTransaction} = useTransactions();
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    
    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
           title,
           amount,
           category,
           type
        })
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input 
                    placeholder="Título" 
                    value={title} 
                    onChange={event => setTitle(event.target.value)}
                />
                <input 
                    placeholder="Valor" 
                    type="number" 
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                    />

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

                <input 
                    placeholder="Categoria"
                    value={category} 
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
      </Modal>
    );
}