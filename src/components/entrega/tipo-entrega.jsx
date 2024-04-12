"use client";

import { Button } from "@nextui-org/react";
import { useState } from 'react';

const TipoEntrega = () => {

    const [entregaSelecionada, setEntregaSelecionada] = useState(null);

    return (
        <div className="">
            <h3 className="font-extrabold ps-2">Tipo de entrega:</h3>

            <div className="flex p-5">
                <Button
                    className={`py-2 px-4 rounded-md focus:outline-none mr-7 text-white font-mono shadow-lg ${entregaSelecionada === 'entrega' ? 'bg-primary' : 'bg-gray-500'}`}
                    onClick={() => setEntregaSelecionada('entrega')}>
                    Entrega
                </Button>

                <Button
                    className={`py-2 px-4 rounded-md focus:outline-none mr-7 text-white font-mono shadow-lg ${entregaSelecionada === 'retirada' ? 'bg-primary' : 'bg-gray-500'}`}
                    onClick={() => setEntregaSelecionada('retirada')}>
                    Retirada
                </Button>
            </div>
        </div>
    )
}

export default TipoEntrega;
