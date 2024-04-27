import React, { useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseApp from "@/lib/firebase";
import ButtonTipoBebida from './buttonBebida';
import ButtonTamanhoPizza from './buttonPizza';

const SelecionarTamanhoProduto = ({ categoriaSelecionada }) => {

    const handleClick = (selectedOption) => {
        if (categoriaSelecionada === 'bebidas') {
            fetchPrecoFromDatabase(selectedOption); 
        } else {
            fetchPrecoFromDatabase(categoriaSelecionada); 
        }
    };

    const fetchPrecoFromDatabase = (categoryId) => {
        const db = getDatabase(firebaseApp);
        const categoriaRef = ref(db, `categoria/${categoryId}/produtos`);

        onValue(categoriaRef, (capturarValor) => {
            const categoriaData = capturarValor.val();
            if (categoriaData) {
                setPreco(categoriaData.preco);
            }
        });
    };

    return (
        <div className={`my-4 ${categoriaSelecionada === 'lanches' ? 'hidden' : ''}`}>
        {categoriaSelecionada !== 'bebidas' && (
            <div>
                <h2 className="font-bold mb-1">Escolha o tamanho</h2>
                <ButtonTamanhoPizza handleClick={handleClick} />
            </div>
        )}
        {categoriaSelecionada === 'bebidas' && (
            <div>
                <h2 className="font-bold mb-1">Escolha o tipo de bebida</h2>
                <ButtonTipoBebida handleClick={handleClick} />
            </div>
        )}
    </div>
    );
};

export default SelecionarTamanhoProduto;