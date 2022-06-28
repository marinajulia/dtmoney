import React, {useContext} from 'react';
import { Container } from "./styles";
import entradas from '../../assets/entradas.svg';
import saidas from '../../assets/saidas.svg';
import total from '../../assets/total.svg';
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
    const {transactions} = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) =>{
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidas} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}