"use client"

import { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import firebaseApp from '@/lib/firebase';
import ImagemProduto from './components/imagemProduto';
import InformacaoProduto from './components/informacaoProduto';

const SobreProduto = ({ params }) => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const fetchProdutoId = async () => {
      try {
        const db = getDatabase(firebaseApp);
        const categoriaRef = ref(db, 'categoria');

        const categoriaVal = await get(categoriaRef);

        if (categoriaVal.exists()) {
          categoriaVal.forEach((categoria) => {
            const categoriaId = categoria.key;
            const produtosRef = ref(db, `categoria/${categoriaId}/produtos`);

            get(produtosRef).then((produtos) => {
              if (produtos.exists()) {
                produtos.forEach((produto) => {
                  const produtoData = produto.val();
                  if (produtoData.Slug === params.slug) {
                    setProduto(produtoData);
                  }
                });
              } else {
                console.log('Não foram encontrados produtos para esta categoria.');
              }
            }).catch((error) => {
              console.error('Erro ao buscar produtos:', error);
            });
          });
        } else {
          console.log('Categoria não encontrada.');
        }
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    fetchProdutoId();
  }, [params.slug]);

  
  return (
    <div>
    {produto && (
      <>
        <ImagemProduto produto={produto} />
        <InformacaoProduto produto={produto} />        
      </>
    )}
  </div>
  );
};

export default SobreProduto;
