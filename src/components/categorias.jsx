"use client"

import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off } from "firebase/database";
import firebaseApp from "@/lib/firebase";
import CategoriaItem from './categoria-item';

const Categorias = ({ onCategoriaSelecionada }) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const db = getDatabase(firebaseApp);
        const categoriaRef = ref(db, 'categoria');

        const fetchCategorias = () => {
            onValue(categoriaRef, (capturarValor) => {
                const categoriasData = capturarValor.val();
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
            off(categoriaRef);
        };
    }, []);

    const handleClickCategoria = (categoria) => {
        onCategoriaSelecionada(categoria);
    };

    return (
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-5">
            {categorias.map((categoria) => (
                <CategoriaItem key={categoria.id} categoria={categoria} onClickCategoria={handleClickCategoria} />
            ))}
        </div>
    );
}

export default Categorias;