import React from 'react';
import ButtonTipoBebida from './buttonBebida';
import ButtonTamanhoPizza from './buttonPizza';

const SelecionarTamanhoProduto = ({ categoriaSelecionada, setTamanhoSelecionado }) => {
    const handleClick = (selectedOption) => {
        setTamanhoSelecionado(selectedOption);
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
