import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const ProdutoItem = ({ produto, preco, categoriaSelecionada, tamanhoSelecionado }) => {
    let precoFinal = preco;

    
    if (categoriaSelecionada === '1_Pizza Tradicional' || categoriaSelecionada === '2_Pizza Especial') {
        tamanhoSelecionado = tamanhoSelecionado || 'familia'; 

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
    } else if (categoriaSelecionada === '4_Bebidas') {
        tamanhoSelecionado = tamanhoSelecionado || '1_litro';

        switch (tamanhoSelecionado) {
            case '1_litro':
                precoFinal = produto.Preco1L;
                break;
            case '2_litros':
                precoFinal = produto.Preco2L;
                break;
            case 'latinha':
                precoFinal = produto.PrecoLatinha;
                break;
            default:
                break;
        }
    } else if (categoriaSelecionada === '3_Lanches') {
        precoFinal = produto.Preco;
    }

    const precoFormatado = typeof precoFinal === 'number' ? `R$ ${precoFinal.toFixed(2)}` : 'indisponível';

    return (
        <Link href={`/produto/${produto.Slug}`}>
            <Card className="flex flex-col border-hidden p-[2px]">
                <div className="flex justify-center flex-col w-[167px] h-[228px] rounded-lg">
                    <div className="flex align-items-center  justify-center rounded-lg gap-3 bg-secondary-foreground w-[160px] h-[170px]">
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
                        <div className="flex justify-between items-baseline px-2">
                            <p className="text-left font-bold text-secondary">{precoFormatado}</p>
                            <Button className="bg-accent border-primary" size="icon" variant="outline">
                                <ShoppingCart className="text-primary" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
}

export default ProdutoItem;