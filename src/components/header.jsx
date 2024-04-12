"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ShoppingCart } from "lucide-react"
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { React } from 'react';
import CardPedido from "./produtos/card-pedido";
import TipoEntrega from "./entrega/tipo-entrega";
import ButtonFinalizar from "./btn-finalizarpedido";
import FormaPagamento from "./pagamento/forma-pagamento";



const Header = () => {


    return (
        <Card className="bg-primary flex justify-between align-items-center p-3 rounded-none">
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={78.66} height={39} />
            </Link>

            <Sheet>
                <SheetTrigger asChild>
                    <Button className="bg-primary shadow-lg" size="icon" variant="outline">
                        <ShoppingCart className="text-[#fff] " />
                    </Button>
                </SheetTrigger>

                <SheetContent >

                    <Button className="flex text-gray-500 font-bold py-3 px-4 mt-6 pointer-events-none bg-transparent border border-black rounded-full">
                        <ShoppingCartIcon
                            variant="outline"
                            size="icon"
                            className="h-5 w-5 text-gray-500 mr-3"
                        />
                        Carrinho
                    </Button>

                    <CardPedido className="" />
                    <CardPedido className="" />

                    <TipoEntrega/>
                    
                    <FormaPagamento/>




                <ButtonFinalizar/>

                
                </SheetContent>

            </Sheet>
        </Card>
    )
}

export default Header;


