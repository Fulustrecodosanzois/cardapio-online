import { Button } from "@/components/ui/button";
import React from "react";

const ButtonTamanhoPizza = ({ handleClick, tamanhoClassName, tamanho }) => {
    return (
        <div className="flex gap-3">
            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-md bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground ${tamanho === 'familia' ? tamanhoClassName : 'hover:bg-primary-foreground hover:text-secondary-foreground'}`}
                onClick={() => handleClick('familia')}
                disabled={tamanho === 'familia'}
            >
                Família
            </Button>

            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-lg bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground ${tamanho === 'media' ? tamanhoClassName : 'hover:bg-primary-foreground hover:text-secondary-foreground'}`}
                onClick={() => handleClick('media')}
                disabled={tamanho === 'media'}
            >
                Média
            </Button>

            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-lg bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground ${tamanho === 'pequena' ? tamanhoClassName : 'hover:bg-primary-foreground hover:text-secondary-foreground'}`}
                onClick={() => handleClick('pequena')}
                disabled={tamanho === 'pequena'}
            >
                Pequena
            </Button>
        </div>
    );
}

export default ButtonTamanhoPizza;
