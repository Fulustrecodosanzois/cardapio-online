import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off } from "firebase/database";
import firebaseApp from "@/lib/firebase";
import { Carousel, CarouselContent } from './ui/carousel';
import CarouselItems from './carousel-items';

const CategoriasCarousel = ({ categoriaId, displayType }) => {
  const [produtos, setProdutos] = useState([]);
  const [precoSelecionado, setPrecoSelecionado] = useState(null);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
  
  const handleTamanhoSelecionado = (tamanho) => {
    setTamanhoSelecionado(tamanho);
  };

  useEffect(() => {
    const db = getDatabase(firebaseApp);
    

    if (typeof categoriaId === 'string') {
      const produtosRef = ref(db, `categoria/${categoriaId}/produtos`);
      
      const fetchProdutos = () => {
        onValue(produtosRef, (capturarValor) => {
          const produtosData = capturarValor.val();
          if (produtosData) {
            const produtosArray = Object.entries(produtosData).map(([key, value]) => ({
              id: key,
              ...value
            }));
            setProdutos(produtosArray);
            
            if (produtosArray.length > 0) {
              setPrecoSelecionado(produtosArray[0].PrecoF);
            }
          }
        });
      };

      fetchProdutos();

      return () => {
        off(produtosRef);
      };
    }
  }, [categoriaId]);

  if (displayType === "carousel") {
    return (
      <Carousel>
        <h1 className='py-5 font-bold text-xl text-primary'>Mais Pedidos</h1>
        <CarouselContent className="p-3 flex gap-5 drop-shadow-md">
          {produtos.map((produto) => (
            <CarouselItems key={produto.id} produto={produto} preco={precoSelecionado} categoriaSelecionada={categoriaId} tamanhoSelecionado={tamanhoSelecionado} />
          ))}
        </CarouselContent>
      </Carousel>
    );
  }
  
  if (displayType === "grid") {
    return (
      <div>
        <h1 className='font-bold uppercase px-1 my-5'>cardápio</h1>
        <div className="grid grid-cols-2 gap-y-5 gap-x-4 mt-5">
          {produtos.map((produto) => (
            <CarouselItems key={produto.id} produto={produto} preco={precoSelecionado} categoriaSelecionada={categoriaId} tamanhoSelecionado={tamanhoSelecionado} />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default CategoriasCarousel;