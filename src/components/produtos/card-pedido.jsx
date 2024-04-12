// import { Card } from "../ui/card";
import React from 'react';
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight, ChevronLeft, Trash2 } from 'lucide-react';
import { Input } from "@nextui-org/react";

const CardPedido = () => {


    return (
        <div className="flex bg-transparent pt-4">

            <div className="flex items-center">

                <div className=" sm:w-auto sm:mb-0 ">
                    <Image
                        objectFit="fill"
                        src="/pizzaCalabresa2.jpg"
                        alt="Pizza calabresa com borda"
                        width={65}
                        height={0}
                        className="w-32 h-28 object-cover rounded-lg"
                    />

                </div>

                <div className='ps-3'>

                    <div className='flex flex-wrap truncate '>
                        <div>
                            <p className='mb-2 font-bold'>Pizza Calabreza com borda</p>
                            <div className='flex justify-between'>
                                <h3 className='font-semibold'>Familia</h3>
                                <h3 className='font-bold'>R$ 40,00</h3>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-between h-16'>

                        <div className='mt-3'>
                            <Button className="bg-red-600 hover:bg-red-600 active:bg-gray-700 align-baseline  shadow-lg">
                                <Trash2 className='text-white' />
                            </Button>
                        </div>


                        <div className="flex items-center mb-">

                            <Button
                                className="bg-transparent w-9 h-9 border-black border-2 text-black active:bg-gray-500  shadow-lg"
                                size="icon"
                            >
                                <ChevronLeft className="w-5 h-5 " />
                            </Button>

                            <Input
                                size="icon"
                                type="number"
                                className="flex items-center justify-center w-9 h-9focus:outline-none"
                                value="5"
                            />

                            <Button
                                className="bg-transparent w-9 h-9 border-black border-2 text-black active:bg-gray-500 shadow-lg"
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
