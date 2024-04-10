import { Card } from "../ui/card";
import React from 'react';
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Input } from "@nextui-org/react";

const CardPedido = () => {





    return (
        <div className="flex h-full p-2 bg-white rounded-lg shadow-md mt-4">
            <div className="flex">

                <div className="flex pe-5 ">
                    <Image
                        src=""
                        alt="Pizza calabresa com borda"
                        width={80}
                        height={80}
                        className="rounded-lg object-cover justify-items-center"
                    />

                </div>

                <div>

                    <div>
                        <p>Pizza Calabreza com borda</p>
                    </div>

                    <div className="flex items-center ">

                        <Button
                            className="bg-transparent w-9 h-9 border-black border-2 text-black "
                            size="icon"
                        >
                            <ChevronLeft className="w-5 h-5"/>
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
                            <ChevronRight className="w-5 h-5"/>
                        </Button>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default CardPedido;
