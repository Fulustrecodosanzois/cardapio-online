import { Badge } from "@/components/ui/badge";
import { CATEGORIA_ICON } from "@/constants/categoria-icon";
import Link from "next/link";

const CategoriaItem = ({ categoria }) => {
    return (
        <Link href={`/${categoria.slug}`}>
            <Badge
                variant="outline"
                className="flex items-center justify-center gap-2 rounded-lg py-3 bg-secondary-foreground text-primary hover:bg-primary hover:text-secondary-foreground"
            >
                {CATEGORIA_ICON[categoria.slug]}
                <span className="text-xs font-bold">{categoria.nome}</span>
            </Badge>
        </Link>
    );
};

export default CategoriaItem;