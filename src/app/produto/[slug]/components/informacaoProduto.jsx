import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InformacaoProduto = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const precoTotal = (produto.PrecoF * quantidade).toFixed(2);

  return (
    <div className="p-5 space-y-4">
      <div className='flex gap-4'>
        <p className='text-primary text-lg'>{produto.Nome}</p>
        <span className='text-secondary-foreground-light'>Familia</span>
      </div>
      
      <span className='font-bold text-secondary text-xl'>R$ {precoTotal}</span>
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
      <Button className="w-full rounded-[10px] text-card uppercase hover:bg-primary">
        Adicionar ao carrinho
      </Button>
    </div>
  );
};

export default InformacaoProduto;