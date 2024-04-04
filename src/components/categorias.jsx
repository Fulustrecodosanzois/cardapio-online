import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off } from "firebase/database";
import firebaseApp from "@/lib/firebase";
import CategoriaItem from "./categoria-item";

const Categorias = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const db = getDatabase(firebaseApp);
        const categoriaRef = ref(db, 'categoria');

        const fetchCategorias = () => {
            onValue(categoriaRef, (instantaneo) => {
                const categoriasData = instantaneo.val();
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

    return (
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-5">
            {categorias.map((categoria) => (
                <CategoriaItem key={categoria.id} categoria={categoria} />
            ))}
        </div>
    );
}

export default Categorias;

// // esse componente precisa pegar as categorias do banco de dados
// import CategoriaItem from "./categoria-item";

// const Categorias = () => {
//     return (
//         <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-5">
//             <CategoriaItem label="Pizza Tradicional" />
//             <CategoriaItem label="Lanches" />
//             <CategoriaItem label="Bebidas" />
//             <CategoriaItem label="Sobremesas" />
//         </div>
//     );
// }
 

// import CategoriaItem from "./categoria-item";

// const Categorias = () => {
//     return (
//         <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-5">
//             <CategoriaItem label="Pizza Tradicional" icone="pizza" />
//             <CategoriaItem label="Lanches" icone="lanches" />
//             <CategoriaItem label="Bebidas" icone="bebidas" />
//             <CategoriaItem label="Sobremesas" icone="sobremesas" />
//         </div>
//     );
// }
 
// export default Categorias;