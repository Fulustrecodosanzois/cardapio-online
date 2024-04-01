"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ShoppingCart } from "lucide-react"
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
    return (  
        <Card className="bg-primary flex justify-between align-items-center p-[30px]">
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
)}
 
export default Header;