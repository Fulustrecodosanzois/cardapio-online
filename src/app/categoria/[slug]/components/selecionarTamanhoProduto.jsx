import React, { useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseApp from "@/lib/firebase";
import ButtonTipoBebida from './buttonBebida';
import ButtonTamanhoPizza from './buttonPizza';

const SelecionarTamanhoProduto = ({ setPreco, categoriaSelecionada }) => {
    const [tipoBebida, setTipoBebida] = useState(null);

    const handleClick = (selectedOption) => {
        if (categoriaSelecionada === '4_bebidas') {
            setTipoBebida(selectedOption);
            fetchPrecoFromDatabase(selectedOption); 
        } else {
            setTipoBebida(null);
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
        <div className="my-4">
            <h2 className="font-bold mb-1">Escolha o tamanho</h2>
            
            {categoriaSelecionada === '4_bebidas' ? (
                <ButtonTipoBebida handleClick={handleClick} tipoBebida={tipoBebida} />
            ) : (
                <ButtonTamanhoPizza handleClick={handleClick} />
            )}
        </div>
    );
};

export default SelecionarTamanhoProduto;