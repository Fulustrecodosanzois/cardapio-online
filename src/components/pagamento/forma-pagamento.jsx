import { Button, Input } from "@nextui-org/react";
import React, { useState, useRef } from 'react';
import { Files, Upload } from 'lucide-react';

const FormaPagamento = () => {
    const [troco, setTroco] = useState('');
    const [semTroco, setSemTroco] = useState(false);
    const [chave, setChave] = useState('A1B2C3D4E5F6');
    const [arquivo, setArquivo] = useState(null);
    const fileInputRef = useRef(null);
    const [mostrarDinheiro, setMostrarDinheiro] = useState(false);
    const [mostrarPix, setMostrarPix] = useState(false);
    const [mostrarCartao, setMostrarCartao] = useState(false);

    const handleTrocoChange = (event) => {
        if (!semTroco) {
            let value = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
            value = value.substring(0, 6); // Limita a 6 dígitos

            // Formata o valor como moeda (R$)
            const formattedValue = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(value / 100); // Divide por 100 para converter centavos para reais

            setTroco(formattedValue);
        }
    };

    const handleSemTrocoChange = (event) => {
        setSemTroco(event.target.checked);
        if (event.target.checked) {
            setTroco('');
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(chave);
    };

    const handleFileChange = () => {
        const file = fileInputRef.current.files[0];
        setArquivo(file);
    };

    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <div>
                <h2 className="font-extrabold ps-2">Formas de pagamento:</h2>
                <div className="flex py-5 px-3 justify-between gap-3">
                    <Button
                        className={`py-2 w-full rounded-md focus:outline-none text-white font-mono shadow-lg ${mostrarDinheiro ? 'bg-primary' : 'bg-gray-500'}`}
                        onClick={() => {
                            setMostrarDinheiro(true);
                            setMostrarPix(false);
                            setMostrarCartao(false);
                        }}>
                        Dinheiro
                    </Button>
                    <Button
                        className={`py-2 w-full rounded-md focus:outline-none text-white font-mono shadow-lg ${mostrarPix ? 'bg-primary' : 'bg-gray-500'}`}
                        onClick={() => {
                            setMostrarDinheiro(false);
                            setMostrarPix(true);
                            setMostrarCartao(false);
                        }}>
                        Pix
                    </Button>
                    <Button
                        className={`py-2 w-full rounded-md focus:outline-none text-white font-mono shadow-lg ${mostrarCartao ? 'bg-primary' : 'bg-gray-500'}`}
                        onClick={() => {
                            setMostrarDinheiro(false);
                            setMostrarPix(false);
                            setMostrarCartao(true);
                        }}>
                        Cartão
                    </Button>
                </div>
            </div>

            <div className="">
                {mostrarDinheiro && (
                    <div id="dinheiro" className="p-3">
                        <h2 className="font-extrabold ps-2">Precisa de troco?</h2>
                        <h4 className="ps-2 mt-3">Valor em dinheiro</h4>

                        <div className="space-x-2 p-3">
                            <Input
                                id="troco"
                                type="tel"
                                value={troco}
                                onChange={handleTrocoChange}
                                placeholder="Valor do dinheiro"
                                className="py-2 w-full border-gray-300 bg-white rounded-md focus:outline-none focus:border-primary focus:ring focus:ring-primary"
                                style={{ textAlign: 'right' }}
                                disabled={semTroco}
                            />
                            <label htmlFor="sem-troco" className="cursor-pointer">
                                <input
                                    id="sem-troco"
                                    type="checkbox"
                                    checked={semTroco}
                                    onChange={handleSemTrocoChange}
                                    className="mt-3 me-2 font-bold"
                                />
                                Não preciso de troco
                            </label>
                        </div>
                    </div>
                )}

                {mostrarPix && (
                    <div id="pix" className="">
                        <div className="p-3">
                            <h2 className="font-extrabold ps-2">Chave:</h2>
                            <div className="flex items-center space-x-2 p-3">
                                <Input
                                    id="chave"
                                    type="text"
                                    value={chave}
                                    className="py-2 w-full border-gray-300 bg-white rounded-md focus:outline-none focus:border-primary focus:ring focus:ring-primary"
                                    readOnly
                                />
                                <div className="">
                                    <Button onClick={handleCopy} className="bg-primary text-white flex items-center rounded-lg p-2 gap-2">
                                        <Files size={30} />
                                        <span className="">Copiar</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div id="upload" className="flex justify-center mb-3">
                            <div className="">
                                <Input
                                    type="file"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                />
                                <div>
                                    <Button onClick={handleUploadButtonClick} className="bg-primary text-white p-3 rounded-lg">
                                        <Upload size={20} />
                                        <span className="ml-1">Enviar Comprovante</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {mostrarCartao && (
                    <div id="cartao" className="mb-3 p-3">
                        <div className="text-center bg-white p-4 rounded-lg">
                            <h3 className="font-extrabold mb-3">Você escolheu pagar com cartão Crédito/Débito</h3>
                            <span className="font-semibold">O entregador levará a maquininha de pagamento até você! Não nos dê golpe!!!</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-3">
                <div className="p-4 bg-white rounded-lg">
                    <div>
                        <div className="flex justify-between">
                            <div>Sub-total</div>
                            <div className="font-bold">R$ 48,90</div>
                        </div>
                        <hr className="my-2 border-gray-600" />
                        <div className="flex justify-between">
                            <div>Retirar</div>
                            <div>Entrega</div>
                        </div>
                        <hr className="my-2 border-gray-600" />
                        <div className="flex justify-between">
                            <div>Taxa de entrega:</div>
                            <div>R$ 5,00</div>
                        </div>
                        <hr className="my-2 border-gray-600" />
                        <div className="flex justify-between">
                            <div>Pagamento</div>
                            <div>Dinheiro</div>
                        </div>
                        <hr className="my-2 border-gray-600" />
                        <div className="flex justify-between">
                            <div className="font-bold">Total:</div>
                            <div className="font-bold">R$ 48,90</div>
                        </div>
                        <hr className="my-2 border-gray-600" />
                        
                    </div>

                </div>
            </div>
















        </div>
    );
};

export default FormaPagamento;



















// "use client";

// import { Button, Input } from "@nextui-org/react";
// import React, { useState, useRef } from 'react';
// import { Files, Upload } from 'lucide-react';

// const FormaPagamento = () => {
//     const [troco, setTroco] = useState('');
//     const [semTroco, setSemTroco] = useState(false);
//     const [chave, setChave] = useState('A1B2C3D4E5F6');
//     const [arquivo, setArquivo] = useState(null);
//     const fileInputRef = useRef(null);

//     const handleTrocoChange = (event) => {
//         if (!semTroco) {
//             let value = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
//             value = value.substring(0, 6); // Limita a 6 dígitos

//             // Formata o valor como moeda (R$)
//             const formattedValue = new Intl.NumberFormat('pt-BR', {
//                 style: 'currency',
//                 currency: 'BRL'
//             }).format(value / 100); // Divide por 100 para converter centavos para reais

//             setTroco(formattedValue);
//         }
//     };

//     const handleSemTrocoChange = (event) => {
//         setSemTroco(event.target.checked);
//         if (event.target.checked) {
//             setTroco('');
//         }
//     };

//     const handleCopy = () => {
//         navigator.clipboard.writeText(chave);
//     };

//     const handleFileChange = () => {
//         const file = fileInputRef.current.files[0];
//         setArquivo(file);
//     };

//     const handleUploadButtonClick = () => {
//         fileInputRef.current.click();
//     };

//     return (
//         <div>
//             <div>
//                 <h2 className="font-extrabold ps-2">Formas de pagamento:</h2>
//                 <div className="flex py-5 px-3 justify-between gap-3">
//                     <Button className="py-2 w-full rounded-md focus:outline-none  text-white font-mono shadow-lg bg-gray-500">
//                         Dinheiro
//                     </Button>
//                     <Button className="py-2 w-full rounded-md focus:outline-none  text-white font-mono shadow-lg bg-gray-500">
//                         Pix
//                     </Button>
//                     <Button className="py-2 w-full rounded-md focus:outline-none  text-white font-mono shadow-lg bg-gray-500">
//                         Cartão
//                     </Button>
//                 </div>
//             </div>

//             <div className="">
//                 <div id="dinheiro" className="p-3">
//                     <h2 className="font-extrabold ps-2">Precisa de troco?</h2>
//                     <h4 className="ps-2 mt-3">Valor em dinheiro</h4>

//                     <div className="space-x-2 p-3">

//                         <Input
//                             id="troco"
//                             type="tel"
//                             value={troco}
//                             onChange={handleTrocoChange}
//                             placeholder="Valor do dinheiro"
//                             className="py-2 w-full border-gray-300 bg-white rounded-md focus:outline-none focus:border-primary focus:ring focus:ring-primary"
//                             style={{ textAlign: 'right' }}
//                             disabled={semTroco}
//                         />
//                         <label htmlFor="sem-troco" className="cursor-pointer">
//                             <input
//                                 id="sem-troco"
//                                 type="checkbox"
//                                 checked={semTroco}
//                                 onChange={handleSemTrocoChange}
//                                 className="mt-3 me-2 font-bold"
//                             />
//                             Não preciso de troco
//                         </label>


//                     </div>
//                 </div>



//                 <div className="">
//                     <div id="pix" className="">
//                         <div className="p-3">
//                             <h2 className="font-extrabold ps-2">Chave:</h2>
//                             <div className="flex items-center space-x-2 p-3">
//                                 <Input
//                                     id="chave"
//                                     type="text"
//                                     value={chave}
//                                     className="py-2 w-full border-gray-300 bg-white rounded-md focus:outline-none focus:border-primary focus:ring focus:ring-primary"
//                                     readOnly />
//                                 <div className="">
//                                     <Button onClick={handleCopy} className="bg-primary text-white flex items-center rounded-lg p-2 gap-2">
//                                         <Files size={30} />
//                                         <span className="">Copiar</span>
//                                     </Button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div id="upload" className="flex justify-center mb-3">
//                         <div className="">
//                             <Input
//                                 type="file"
//                                 accept=".pdf,.jpg,.jpeg,.png"
//                                 ref={fileInputRef}
//                                 onChange={handleFileChange}
//                                 style={{ display: 'none' }} />
//                             <div>
//                                 <Button onClick={handleUploadButtonClick} className="bg-primary text-white p-3 rounded-lg">
//                                     <Upload size={20} />
//                                     <span className="ml-1">Enviar Comprovante</span>
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>

//                     <div id="cartao" className="mb-3 p-3">
//                         <div className="text-center bg-white p-4 rounded-lg">
//                             <h3 className="font-extrabold mb-3">Você escolheu pagar com cartão Crédito/Débito</h3>
//                             <span className="font-semibold">O entregador levará a maquininha de pagamento até você! não nos dê golpe!!!</span>
//                         </div>
//                     </div>

//                 </div>

//             </div>



//         </div>
//     );
// };

// export default FormaPagamento;


