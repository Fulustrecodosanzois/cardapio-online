"use client";

import { useEffect, useState } from 'react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useRouter } from "next/navigation";

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
                    <Button className="bg-primary" size="icon" variant="outline">
                        <ShoppingCart className="text-[#fff]"/>
                    </Button>
                </SheetTrigger>

                <SheetContent>
                    <h1>Carrinho = mudar depois</h1>
                </SheetContent>
            </Sheet>
        </Card>         
    );
}
 
export default Header;