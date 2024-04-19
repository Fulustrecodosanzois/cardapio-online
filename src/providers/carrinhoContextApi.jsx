"use client";

import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function useCarrinho() {
  return useContext(CarrinhoContext);
}

const CarrinhoProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  const addProdutoAoCarrinho = (produto) => {
    const updatedProdutos = [...produtos, produto];
    setProdutos(updatedProdutos);
  };

  const removeProdutoDoCarrinho = (productId) => {
    const updatedProdutos = produtos.filter((produto) => produto.id !== productId);
    setProdutos(updatedProdutos);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        produtos,
        addProdutoAoCarrinho,
        removeProdutoDoCarrinho
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoProvider;