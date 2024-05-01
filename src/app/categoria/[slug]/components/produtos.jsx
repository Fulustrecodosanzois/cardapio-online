import React from 'react';
import ProdutoItem from './produto-item';

const ProdutosPorCategoria = ({ produtos, categoriaSelecionada, tamanhoSelecionado }) => {
    return (
        <div>
            <h1 className='font-bold uppercase px-1 my-5'>cardápio</h1>
            <div className="grid grid-cols-2 gap-y-5 gap-x-4 mt-5">
                {produtos.map((produto) => (
                    <ProdutoItem 
                        key={produto.id}
                        produto={produto}
                        categoriaSelecionada={categoriaSelecionada}
                        tamanhoSelecionado={tamanhoSelecionado}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProdutosPorCategoria;
