"use client";

import React, { useState } from "react";
import CategoriasCarousel from "@/components/carousel-principais";
import Categorias from "@/components/categorias";
import Image from "next/image"
import Link from "next/link";


export default function Home() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("1_Pizza Tradicional");

    const handleCategoriaSelecionada = (categoriaId) => {
        setCategoriaSelecionada(categoriaId);
    };

    return (
        <div className="p-5">
            <Image
                src="/banner.png"
                alt="banner uma explosão de sabores"
                width={1000}
                height={500}
                className="h-auto w-full"
                sizes="100vw"
            />
            <Categorias onCategoriaSelecionada={handleCategoriaSelecionada} />
            <Link href="/display/[slug]/page" as={`/display/${categoriaSelecionada}`}>
                <CategoriasCarousel categoriaId={categoriaSelecionada} displayType="carousel" />
            </Link>
        </div>
    )
};

