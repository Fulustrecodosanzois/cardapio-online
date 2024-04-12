import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from 'react';

const TipoEntrega = () => {
    const [entregaSelecionada, setEntregaSelecionada] = useState(null);
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Dados do formulário:', { nome, endereco, numero, bairro, telefone, mensagem });
        // Aqui você pode fazer o que quiser com os dados do formulário, como enviá-los para um servidor ou realizar validações.
    };

    const handleTelefoneChange = (event) => {
        let formattedTelefone = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
        if (formattedTelefone.length > 0) {
            formattedTelefone = formattedTelefone.substring(0, 11); // Limita o número de dígitos a 11
            formattedTelefone = formattedTelefone.replace(/^(\d{2})(\d)/g, '$1 $2'); // Adiciona espaço após os primeiros 2 dígitos
            formattedTelefone = formattedTelefone.replace(/(\d{1})(\d{4})(\d{4})$/, '$1 $2 $3'); // Adiciona espaço após os próximos 4 dígitos
        }
        setTelefone(formattedTelefone);
    };

    const handleMensagemChange = (event) => {
        let trimmedMensagem = event.target.value.substring(0, 400); // Limita a mensagem para os primeiros 400 caracteres
        setMensagem(trimmedMensagem);
    };

    return (
        <div className="mt-4">
            <h3 className="font-extrabold ps-2">Tipo de entrega:</h3>
            <div className="flex p-5">
                <Button
                    className={`py-2 px-4 rounded-md focus:outline-none mr-7 text-white font-mono shadow-lg ${entregaSelecionada === 'entrega' ? 'bg-primary' : 'bg-gray-500'}`}
                    onClick={() => setEntregaSelecionada('entrega')}>
                    Entrega
                </Button>
                <Button
                    className={`py-2 px-4 rounded-md focus:outline-none mr-7 text-white font-mono shadow-lg ${entregaSelecionada === 'retirada' ? 'bg-primary' : 'bg-gray-500'}`}
                    onClick={() => setEntregaSelecionada('retirada')}>
                    Retirada
                </Button>
            </div>

            <div className="px-3">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <Input
                            id="nome"
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Nome completo"
                            className="mt-1 px-3 py-2 block w-full border-gray-300 bg-white rounded-md focus:outline-none focus:border-primary focus:ring focus:ring-primary" />
                    </div>
                    <div className="mb-4">
                        <Input
                            id="endereco"
                            type="text"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                            placeholder="Endereço de entrega"
                            className="mt-1 px-3 py-2 block w-full border-gray-300 bg-white rounded-md focus:outline-none focus:border-primary focus:ring focus:ring-primary" />
                    </div>
                    <div className="flex gap-3">
                        <div className="mb-4 w-2/4">
                            <Input
                                id="numero"
                                type="text"
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                                placeholder="N°"
                                className="mt-1 px-3 py-2 block border-gray-300 bg-white rounded-md focus:outline-none focus:border-primary focus:ring focus:ring-primary " />
                        </div>
                        <div className="mb-4">
                            <Input
                                id="bairro"
                                type="text"
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}
                                placeholder="Bairro"
                                className="mt-1 px-3 py-2 block w-full border-gray-300 bg-white rounded-md focus:outline-none focus:border-primary focus:ring focus:ring-primary" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <Input
                            id="telefone"
                            type="text"
                            value={telefone}
                            onChange={handleTelefoneChange}
                            placeholder="Telefone / WhatsApp"
                            className="mt-1 px-3 py-2 block w-full border-gray-300 bg-white rounded-md focus:outline-none focus:border-primary focus:ring focus:ring-primary" />
                    </div>
                    <div className="mb-4">
                        <Textarea
                            id="mensagem"
                            value={mensagem}
                            onChange={handleMensagemChange}
                            placeholder="Observação (máximo 400 caracteres)"
                            className="mt-1 px-3 py-2 block w-full border-gray-300 bg-white rounded-md focus:outline-none focus:border-primary focus:ring focus:ring-primary" />
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default TipoEntrega;
