import React from 'react';

const Total = () => {
    return (
        <div className="p-3">
            <div className="p-4 bg-white rounded-lg">
                <div>
                    <div className="flex justify-between">
                        <div className='font-extrabold'>Sub-total:</div>
                        <div className="">R$ 48,90</div>
                    </div>
                    <hr className="my-2 border-gray-600" />
                    <div className="flex justify-between">
                        <div className='font-extrabold'>Entrega:</div>
                        <div>Retirar</div>
                    </div>
                    <hr className="my-2 border-gray-600" />
                    <div className="flex justify-between">
                        <div className='font-extrabold'>Taxa de entrega:</div>
                        <div>R$ 5,00</div>
                    </div>
                    <hr className="my-2 border-gray-600" />
                    <div className="flex justify-between">
                        <div className='font-extrabold'>Forma de Pagamento:</div>
                        <div>Dinheiro</div>
                    </div>
                    <hr className="my-2 border-gray-600" />
                    <div className="flex justify-between">
                        <div className="font-extrabold">Total:</div>
                        <div className="font-semibold">R$ 48,90</div>
                    </div>
                    <hr className="my-2 border-gray-600" />

                </div>

            </div>
        </div>



    )


}

export default Total;