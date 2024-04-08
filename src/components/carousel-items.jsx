
import Image from "next/image";
import { Card } from "./ui/card";


const CarouselItems = ({ produto }) => {
    return (
        <Card className="flex flex-col border-hidden">
            <div className="w-[167px] h-[228px] rounded-lg ">
                <div className="flex align-items-center justify-center rounded-tl-lg gap-3 rounded-tr-lg bg-secondary-foreground w-[167px] h-[170px]">
                    <Image
                        src={produto.imgUrl}
                        alt={produto.Nome}
                        width={120}
                        height={120}
                        sizes="100vw"
                        className="object-contain"
                    />
                </div>
                <div className="rounded-lg bg-accent flex flex-col justify-between h-[58px] px-3">
                    <div className="flex justify-between mt-7">
                        <p className="text-sm mt-1 text-gray-600 font-semibold">Valor:</p>
                        <p className="text-lg font-semibold text-red-600">R$ {produto.PrecoF}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default CarouselItems;