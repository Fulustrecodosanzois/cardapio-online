import { useCarrinho } from "@/providers/carrinhoContextApi";
import PedidoItem from "./pedido-item";

const Pedido = () => {
    const { produtos } = useCarrinho();
    
    return (
        <div className="flex flex-col gap-5 my-2">
            {produtos.map((produto) => (
                <PedidoItem key={produto.id} produto={produto}/>
            ))}
        </div>
    );
}

export default Pedido;