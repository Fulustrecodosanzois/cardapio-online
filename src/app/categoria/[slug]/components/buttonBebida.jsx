import { Button } from "@/components/ui/button";
import React from "react";

const ButtonTipoBebida = ({ handleClick, tipoBebida }) => {
    return (
        <div className="flex gap-3">
            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-md bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground ${tipoBebida === '1_litro' ? 'bg-primary-foreground text-secondary-foreground' : 'hover:bg-primary-foreground hover:text-secondary-foreground'}`}
                onClick={() => handleClick('1_litro')}
                disabled={tipoBebida === '1_litro'}
            >
                1 Litro
            </Button>

            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-lg bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground ${tipoBebida === '2_litros' ? 'bg-primary-foreground text-secondary-foreground' : 'hover:bg-primary-foreground hover:text-secondary-foreground'}`}
                onClick={() => handleClick('2_litros')}
                disabled={tipoBebida === '2_litros'}
            >
                2 Litros
            </Button>

            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-lg bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground ${tipoBebida === 'latinhas' ? 'bg-primary-foreground text-secondary-foreground' : 'hover:bg-primary-foreground hover:text-secondary-foreground'}`}
                onClick={() => handleClick('latinhas')}
                disabled={tipoBebida === 'latinhas'}
            >
                Latinhas
            </Button>
        </div>
    );
}

export default ButtonTipoBebida;
