"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const CarrinhoContext = createContext();

export function useCarrinho() {
  return useContext(CarrinhoContext);
}

const CarrinhoProvider = ({ children }) => {
  const [produtosCarregados, setProdutosCarregados] = useState(false);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const storedProdutos = JSON.parse(localStorage.getItem("@cardapio/carrinho-produtos") || "[]");
    setProdutos(storedProdutos);
    setProdutosCarregados(true);
  }, []);
  
  useEffect(() => {
    if (produtosCarregados) {
      localStorage.setItem("@cardapio/carrinho-produtos", JSON.stringify(produtos));
    }
  }, [produtos, produtosCarregados]);

  const addProdutoAoCarrinho = (produto) => {
    const updatedProdutos = [...produtos, produto];
    setProdutos(updatedProdutos);
  };

  const removeProdutoDoCarrinho = (produtoId) => {
    const updatedProdutos = produtos.filter((produto) => produto.id !== produtoId);
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