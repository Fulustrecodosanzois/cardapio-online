"use client";
import { Copyright } from 'lucide-react';
import { Card } from "./ui/card";

const Footer = () => {
    return (
        <Card className="border text-card-foreground shadow-sm bg-primary rounded-none">
            <div className="flex justify-center items-center p-5"> 
                <div className="w-full"> 
                    <div className="flex justify-center items-center">
                        <Copyright className='text-white' size="20" />
                        <span className="ml-2 text-white"> 2024 Todos os direitos reservados.</span>
                    </div>
                </div>
            </div>
        </Card>
    );
} 

export default Footer;
