import React from "react";
import { CATEGORIA_ICON } from "@/constants/categoria-icon";
import Link from "next/link";
import { Badge } from "./ui/badge";

const CategoriaItem = ({ categoria, onClickCategoria }) => {
    if (!categoria) return null; 
    
    const handleClick = () => {
        onClickCategoria(categoria);
    };
    
    return (
        <Link href={`/categoria/${categoria.slug}`}>
            <Badge
                variant="outline"
                className={`border-primary flex items-center justify-center w-full gap-2 rounded-lg py-3 bg-secondary-foreground text-primary hover:bg-primary-foreground hover:text-secondary-foreground`}
                onClick={handleClick}
            >
                {CATEGORIA_ICON[categoria.slug]}
                <span className="text-xs font-bold">{categoria.nome}</span>
            </Badge>
        </Link>
    );
};

export default CategoriaItem;