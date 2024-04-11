// import { Card } from "../ui/card";
import React from 'react';
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight, ChevronLeft, Trash2 } from 'lucide-react';
import { Input } from "@nextui-org/react";

const CardPedido = () => {


    return (
        <div className="flex bg-white rounded-lg shadow-md mt-4">

            <div className="flex">

                <div className="flex p-2 pe-2 ">
                    <Image
                        objectFit='cover'
                        src="/pizzaCalabresa.jpg"
                        alt="Pizza calabresa com borda"
                        width={65}
                        height={0}
                        className="w-full h-full object-cover rounded-lg"
                    />

                </div>

                <div className='gap-10'>

                    <div className='flex flex-wrap truncate '>
                        <div>
                            <p className='mb-2'>Pizza Calabreza com borda</p>
                            <div className='flex justify-between'>
                                <h3 className=''>Familia</h3>
                                <h3 className='font-bold'>R$ 40,00</h3>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-between mt-4'>

                        <div className=''>
                            <Button className="bg-red-600">
                                <Trash2 className='text-white'/>
                            </Button>
                        </div>


                        <div className="flex items-center mb-5">

                            <Button
                                className="bg-transparent w-9 h-9 border-black border-2 text-black "
                                size="icon"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>

                            <Input
                                size="icon"
                                type="number"
                                className="flex items-center justify-center w-9 h-9focus:outline-none"
                                value="5"
                            />

                            <Button
                                className="bg-transparent w-9 h-9 border-black border-2 text-black"
                                size="icon"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>

                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default CardPedido;
