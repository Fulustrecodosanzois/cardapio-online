import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off } from "firebase/database";
import firebaseApp from "@/lib/firebase";
import { Carousel, CarouselContent } from './ui/carousel';
import CarouselItems from './carousel-items';



const CategoriasCarousel = ({ categoriaId }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const db = getDatabase(firebaseApp);
    const categoriasRef = ref(db, 'categoria/Pizza Tradicional/dzxeelks4');

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
    <Carousel className="my-5">
            <CarouselContent className="px-5 flex gap-4">
                {categorias.map((produto) => (
                    <CarouselItems key={produto.Nome} produto={produto}/>
                ))} 
            </CarouselContent>
        </Carousel>
  );
};

export default CategoriasCarousel;
