import { useContext, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarrinho } from '@/providers/carrinhoContextApi';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InformacaoProduto = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(1);
  const { addProdutoAoCarrinho } = useCarrinho();

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const precoTotal = (produto.PrecoF * quantidade).toFixed(2);

  const handleAddAoCarrinho = () => {
    addProdutoAoCarrinho({ ...produto, quantidade });
    toast.success(`${produto.Nome} adicionado(a) ao carrinho`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      }); 
  };

  return (
    <div className="p-5 space-y-4">
      <p className='text-primary text-lg'>{produto.Nome}</p>
      <div className='flex gap-4'>
        <span className='font-bold text-secondary text-xl'>R$ {precoTotal}</span>
        <span className='text-secondary-foreground-light'>Familia *será dinâmico</span>
      </div>
      <div className='flex gap-3'>
        <Button
          className="bg-transparent text-primary hover:text-primary border-primary"
          size="icon"
          variant="outline"
          onClick={diminuirQuantidade}
        >
          <ChevronLeft />
        </Button>
        <div className="text-primary w-[15] h-[15] flex justify-center items-center">
          <span className='text-xl'>{quantidade}</span>
        </div>
        <Button
          className="bg-transparent text-primary hover:text-primary border-primary"
          size="icon"
          variant="outline"
          onClick={aumentarQuantidade}
        >
          <ChevronRight />
        </Button>
      </div>
      <div className='flex-col space-y-2'>
        <h2 className='font-bold'>Ingredientes</h2>
        <p className='text-secondary-foreground-ligth'>{produto.Descricao}</p>
      </div>
      <div className='space-y-2'>
        <h2 className='text-primary text-lg'>Adicional</h2>
        <p>Deseja adicionar Borda?</p>
        <Switch />
      </div>
      <Button className="w-full rounded-[10px] text-card uppercase hover:bg-primary"
        onClick={handleAddAoCarrinho}>
        {console.log(produto.Id)}
        Adicionar ao carrinho
      </Button>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default InformacaoProduto;
