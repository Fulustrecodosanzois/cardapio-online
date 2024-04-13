// import { Card } from "../ui/card";
import React from 'react';

import { Button } from "../ui/button";
import { ChevronRight, ChevronLeft, Trash2 } from 'lucide-react';
import { Input } from "@nextui-org/react";
import Image from 'next/image';
import AdicionaisPizza from './adicionais-pizza';

const CardPedido = () => {

    return (

        <div className=" bg-transparent">
            <div className="w-full">

                <Image
                    objectFit="cover"
                    src="/pizzaCalabresa2.jpg"
                    alt="Pizza calabresa com borda"
                    width={100}
                    height={100}
                    className="w-full"
                />

            </div>

            <div className=''>

                <div className='truncate p-3'>

                    <h3 className='mb-2 font-bold text-xl text-primary'>Pizza Calabreza</h3>
                    <div className='mt-3 flex gap-4'>
                        <h3 className='text-xl font-bold text-red-600'>R$ 40,00</h3>
                        <h3 className=''>Familia</h3>
                    </div>

                </div>

                <div className='flex m-3'>

                    <div className="flex items-center ">

                        <Button
                            className="bg-transparent w-9 h-9 border-primary border-2 text-primary active:bg-primary shadow-lg"
                            size="icon"
                        >
                            <ChevronLeft className="w-5 h-5 " />
                        </Button>

                        <Input
                            size="icon"
                            type="number"
                            className="flex items-center justify-center w-9 h-9focus:outline-none text-primary"
                            value="5"
                        />

                        <Button
                            className="bg-transparent w-9 h-9 border-primary border-2 text-primary active:bg-primary shadow-lg"
                            size="icon"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>

                    </div>

                </div>
            </div>

            <div className='p-3'>
                <h3 className='mb-3 font-bold'>Ingredientes:</h3>
                <p className=''>Massa de pizza, Molho de tomate, Queijo mussarela, Linguiça calabresa fatiada, Cebola fatiada, Azeitonas pretas fatiadas, Orégano, Azeite de oliva.</p>
            </div>

            <AdicionaisPizza/>

        </div>



    )
}

export default CardPedido;
