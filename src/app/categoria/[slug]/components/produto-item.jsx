import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const ProdutoItem = ({ produto, preco, categoriaSelecionada, tamanhoSelecionado }) => {
    let precoFinal = preco;

    
    if (categoriaSelecionada === '4_Bebidas') {

        precoFinal = produto.Preco2L;
        
        // if (tamanhoSelecionado === '1L') {
        //     precoFinal = produto.Preco1L;
        // } else if (tamanhoSelecionado === '2L') {
        //     precoFinal = produto.Preco2L;
        // } else if (tamanhoSelecionado === 'latinha') {
        //     precoFinal = produto.Latinha;
        // }

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
        <Link href={`/produto/${produto.Slug}`}>
            <Card className="flex flex-col border-hidden p-[2px]">
                <div className="w-[167px] h-[228px] rounded-lg">
                    <div className="flex align-items-center  justify-center rounded-lg gap-3 bg-secondary-foreground w-[167px] h-[170px]">
                        <Image
                            src={produto.imgUrl}
                            alt={produto.Nome}
                            width={120}
                            height={120}
                            sizes="100vw"
                            className="object-contain"
                        />
                    </div>
                    <div className="rounded-lg bg-accent flex flex-col align-items-center justify-center h-[58px]">

                        <p className="text-left px-3 text-sm font-semibold truncate">{produto.Nome}</p>
                        
                        <div className="flex justify-between items-baseline pl-2">
                            <p className="text-left font-bold text-secondary">R$ {precoFinal}</p>
                            <Button className="bg-accent border-primary mr-1" size="icon" variant="outline">
                                <ShoppingCart className="text-primary"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
}

export default ProdutoItem;
