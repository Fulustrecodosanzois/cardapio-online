"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { React } from 'react';
import TipoEntrega from "./entrega/tipo-entrega";
import ButtonFinalizar from "./btn-finalizarpedido";
import FormaPagamento from "./pagamento/forma-pagamento";
import CardPedidoDelete from "./produtos/card-pedido-delete";
import { useRouter } from "next/navigation";
import Pedido from './produtos/card-pedido';

const Header = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };

    return (  
        <Card className="bg-primary flex justify-between align-items-center p-[30px] rounded-none">
            <Button
                className="bg-primary text-white hover:text-white hidden"
                size="icon"
                variant="outline"
                onClick={handleClick}
            >
                <ChevronLeft />
            </Button>

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

                    <CardPedidoDelete className="" />
                    <Pedido className="" />

                    <TipoEntrega/>
                    
                    <FormaPagamento/>




                <ButtonFinalizar/>

                
                </SheetContent>

            </Sheet>
        </Card>
    )
}

export default Header;


