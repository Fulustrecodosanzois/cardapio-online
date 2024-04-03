import { Badge } from "./ui/badge";
import { Pizza } from 'lucide-react';

const CategoriaItem = ({ categoria, label }) => {
    return (
        <Badge variant="outline" className="flex justify-center align-items-center p-3 gap-2 rounded-lg bg-secondary-foreground text-primary">
            <Pizza/>
            <span className="font-bold text-xs">{label}</span>
        </Badge>
    );
}
 
export default CategoriaItem;