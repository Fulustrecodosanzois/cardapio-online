"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ShoppingCart } from "lucide-react"
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (  
        <Card className="bg-primary flex justify-between align-items-center p-[30px]">
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={78.66} height={39} />
            </Link>          
            
            <Button className="bg-primary" size="icon" variant="outline">
                <ShoppingCart className="text-[#fff]"/>
            </Button>
        </Card>         
)}
 
export default Header;