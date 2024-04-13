import React from 'react';


const Total = () => {
    return (
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



    )


}

export default Total;