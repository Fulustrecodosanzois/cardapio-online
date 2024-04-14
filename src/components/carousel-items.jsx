import React from 'react';
import { Card } from "@/components/ui/card";
import Image from "next/image";

const CarouselItems = ({ produto, preco, categoriaSelecionada, tamanhoSelecionado }) => {
    let precoFinal = preco;
    
    if (categoriaSelecionada === '4_Bebidas') {
        precoFinal = produto.Preco2L;
            
    } else if (categoriaSelecionada === '3_Lanches') {
        precoFinal = produto.Preco;
    } else if ((categoriaSelecionada === '1_Pizza Tradicional' || categoriaSelecionada === '2_Pizza Especial') && tamanhoSelecionado) {
        switch (tamanhoSelecionado) {
            case 'familia':
                precoFinal = produto.PrecoF;
                break;
            case 'media':
                precoFinal = produto.PrecoM;
                break;
            case 'pequena':
                precoFinal = produto.PrecoP;
                break;
            default:
                break;
        }
    }
    return (
        <Card className="flex flex-col border-hidden p-[2px]">
            <div className="w-[167px] h-[250px] rounded-lg">
                <div className="flex align-items-center justify-center rounded-lg gap-3 bg-secondary-foreground w-[167px] h-[170px]">
                    <Image
                        src={produto.imgUrl}
                        alt={produto.Nome}
                        width={120}
                        height={120}
                        sizes="100vw"
                        className="object-contain"
                    />
                </div>
                <div className="rounded-lg flex flex-col justify-between h-[75px] px-3">
                    <div className="flex justify-between flex-col mt-2">
                        <p className="text-sm font-semibold truncate">{produto.Nome}</p>
                        <p className="text-lg text-end font-semibold text-secondary mt-3">R$ {precoFinal}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default CarouselItems;
