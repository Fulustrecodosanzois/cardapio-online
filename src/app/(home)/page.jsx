"use client";

import FirebaseCarousel from "@/components/carousel-principais";
import Categorias from "@/components/categorias";
import Image from "next/image"

export default function Home() {
    return (
        <div className="p-5">
            <Image
                src="/banner.png"
                alt="banner uma explosão de sabores"
                height={0}
                width={0}
                className="h-auto w-full"
                sizes="100vw"
            />
            <Categorias/>

            <FirebaseCarousel/>

            
        </div>
        
    )
};
