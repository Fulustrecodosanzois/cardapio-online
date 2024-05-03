
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { useCarrinho } from '@/providers/carrinhoContextApi';
import { useSearchParams } from "next/navigation";

const PedidoItem = ({ produto }) => {
    const searchParams = useSearchParams();
    const preco = searchParams.get("preco")
    const tamanho = searchParams.get("tamanho")
    const precoTotal = (preco * produto.quantidade).toFixed(2);

    const { removeProdutoDoCarrinho } = useCarrinho();

    const handleRemoverProduto = () => {
        removeProdutoDoCarrinho(produto.id);
    };

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 w-full px-4">
                <div className="flex justify-center items-center rounded-lg bg-white h-[100px] w-[100px]">
                    <Image
                        src={produto.imgUrl}
                        alt={produto.Nome}
                        width={100}
                        height={100}
                        sizes="100vw"
                    />
                </div>
                

                <div className="flex flex-col">
                    <div className='flex flex-wrap truncate'>
                        
                        <p className='mb-2 font-bold'>{produto.Nome}</p>
                        
                        <div className='flex justify-between w-full '>
                            <h3 className='font-semibold'>{tamanho}</h3>
                            <h3 className='font-bold'>R$ {precoTotal}</h3>
                        </div>
                        
                    </div>
                    
                    <div className='flex justify-between h-16'>

                        <div className='mt-3'>
                            <Button className="bg-secondary hover:bg-red-600 active:bg-red-800 align-baseline  shadow-lg"
                            onClick={handleRemoverProduto}>
                                <Trash2 className='text-white' />
                            </Button>
                        </div>


                        <div className="flex items-center gap-4">

                            <Button
                                className="bg-transparent w-9 h-9 border-black border-2 text-black active:bg-gray-500  shadow-lg"
                                size="icon"
                            >
                                <ChevronLeft className="w-5 h-5 " />
                            </Button>

                            <div className="text-foreground w-[15] h-[15] flex justify-center items-center">
                            <span className='text-xl'>{produto.quantidade}</span>
                            </div>

                            <Button
                                className="bg-transparent w-9 h-9 border-black border-2 text-black active:bg-gray-500 shadow-lg"
                                size="icon"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>

                        </div>

                    </div>
                </div>
            </div>                  
        </div>
    );
}
 
export default PedidoItem;