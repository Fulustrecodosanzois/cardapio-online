import React, { useEffect, useState } from "react";
import {firebaseApp} from "@/lib/firebase.js";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import {firebaseApp} from "firebase/database";

const CategoriasCarousel = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const database = firebaseApp.database();
    const categoriasRef = database.ref("categorias");

    categoriasRef.on("value", (snapshot) => {
      const categoriasData = snapshot.val();
      const categoriasArray = Object.values(categoriasData);
      setCategorias(categoriasArray);
    });

    return () => {
      categoriasRef.off("value");
    };
  }, []);

  return (
    <Carousel>
      <CarouselContent>
        {categorias.map((categoria, index) => (
          <CarouselItem key={index}>
            <img src={categoria.imgUrl} alt={categoria.nome} />
            <h3>{categoria.nome}</h3>
            <p>{categoria.descricao}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CategoriasCarousel;
