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
 
// export default Categorias;

import CategoriaItem from "./categoria-item";

const Categorias = () => {
    return (
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-5">
            <CategoriaItem label="Pizza Tradicional" icone="pizza" />
            <CategoriaItem label="Lanches" icone="lanches" />
            <CategoriaItem label="Bebidas" icone="bebidas" />
            <CategoriaItem label="Sobremesas" icone="sobremesas" />
        </div>
    );
}
 
export default Categorias;