// import { Badge } from "./ui/badge";
// import { Pizza } from 'lucide-react';

// const CategoriaItem = ({ categoria, label }) => {
//     return (
//         <Badge variant="outline" className="flex justify-center align-items-center p-3 gap-2 rounded-lg bg-secondary-foreground text-primary">
//             <Pizza/>
//             <span className="font-bold text-xs">{label}</span>
//         </Badge>
//     );
// }

// export default CategoriaItem;






import { Badge } from "./ui/badge";
import { Pizza, Utensils, CupSoda, IceCreamCone } from 'lucide-react';

const CategoriaItem = ({ label, icone }) => {
    // Mapeamento de ícones para cada categoria
    const icones = {
        pizza: <Pizza />,
        lanches: <Utensils />,
        bebidas: <CupSoda />,
        sobremesas: <IceCreamCone />
    };

    return (
        <Badge variant="outline" className="flex justify-center align-items-center p-3 gap-2 rounded-lg bg-secondary-foreground text-primary">
            {icones[icone]} {/* Renderiza o ícone correspondente */}
            <span className="font-bold text-xs">{label}</span>
        </Badge>
    );
}
 
export default CategoriaItem;