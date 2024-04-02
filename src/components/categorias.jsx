// esse componente precisa pegar as categorias do banco de dados

import CategoriaItem from "./categoria-item";

const Categorias = () => {
    return (
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-5">
            <CategoriaItem />
            <CategoriaItem />
            <CategoriaItem />
            <CategoriaItem />
        </div>
    );
}
 
export default Categorias;