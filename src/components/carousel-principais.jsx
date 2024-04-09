import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off } from "firebase/database";
import firebaseApp from "@/lib/firebase";
import { Carousel, CarouselContent } from './ui/carousel';
import CarouselItems from './carousel-items';



const CategoriasCarousel = ({ categoriaId }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const db = getDatabase(firebaseApp);
    const categoriasRef = ref(db, 'categoria/1_Pizza Tradicional/produtos');

    const fetchCategorias = () => {
      onValue(categoriasRef, (snapshot) => {
          const categoriasData = snapshot.val();
          if (categoriasData) {
              const categoriasArray = Object.entries(categoriasData).map(([key, value]) => ({
                  id: key,
                  ...value
              }));
              setCategorias(categoriasArray);
          }
      });
    };

    fetchCategorias();

    return () => {
        off(categoriasRef);
    };

    
  }, [ categoriaId ]);

  return (
    <Carousel className="">
            <CarouselContent className="p-3 flex gap-5 drop-shadow-md">
                {categorias.map((produto) => (
                    <CarouselItems key={produto.Nome} produto={produto}/>
                ))} 
            </CarouselContent>
        </Carousel>
  );
};

export default CategoriasCarousel;
