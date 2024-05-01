import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ButtonTipoBebida = ({ handleClick }) => {

    const [selectedTamanho, setSelectedTamanho] = useState("1_litro");
    
    const handleButtonClick = (tamanho) => {
        setSelectedTamanho(tamanho);
        handleClick(tamanho);
    };

    return (
        <div className="flex gap-3">
            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-md bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground hover:bg-primary-foreground hover:text-secondary-foreground ${selectedTamanho === '1_litro' ? 'bg-primary-foreground text-secondary-foreground' : ''}`}
                onClick={() => handleButtonClick('1_litro')}
            >
                1 Litro
            </Button>

            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-lg bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground hover:bg-primary-foreground hover:text-secondary-foreground ${selectedTamanho === '2_litros' ? 'bg-primary-foreground text-secondary-foreground' : ''}`}
                onClick={() => handleButtonClick('2_litros')}
            >
                2 Litros
            </Button>

            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-lg bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground hover:bg-primary-foreground hover:text-secondary-foreground ${selectedTamanho === 'latinha' ? 'bg-primary-foreground text-secondary-foreground' : ''}`}
                onClick={() => handleButtonClick('latinha')}
            >
                Latinha
            </Button>
        </div>
    );
}

export default ButtonTipoBebida;