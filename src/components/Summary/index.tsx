import React, {useContext} from 'react';
import { Container } from "./styles";
import entradas from '../../assets/entradas.svg';
import saidas from '../../assets/saidas.svg';
import total from '../../assets/total.svg';
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
    const data = useContext(TransactionsContext);

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="Entradas" />
                </header>
                <strong>1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidas} alt="Entradas" />
                </header>
                <strong>1000,00</strong>
            </div>
            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Entradas" />
                </header>
                <strong>1000,00</strong>
            </div>
        </Container>
    )
}