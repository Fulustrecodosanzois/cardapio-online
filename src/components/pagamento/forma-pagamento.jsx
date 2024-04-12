"use client";

import { Button } from "@nextui-org/react";
import React from 'react';

const FormaPagamento = () => {
    return (

        <div>

            <h2 className="font-extrabold ps-2">Formas de pagamento:</h2>

            <div className="flex py-5 px-3 justify-between gap-3">
                <Button
                    className="py-2 w-full rounded-md focus:outline-none  text-white font-mono shadow-lg bg-gray-500">
                    Dinheiro
                </Button>
                <Button
                    className="py-2 w-full rounded-md focus:outline-none  text-white font-mono shadow-lg bg-gray-500">
                    Pix
                </Button>
                <Button
                    className="py-2 w-full rounded-md focus:outline-none  text-white font-mono shadow-lg bg-gray-500">
                    Cartão
                </Button>
            </div>
        </div>

    )
}

export default FormaPagamento;