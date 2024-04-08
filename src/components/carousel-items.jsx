
import Image from "next/image";
import { Card } from "./ui/card";


const CarouselItems = ({ produto }) => {
    return (
        <Card className="flex flex-col border-hidden bg-transparent">
            <div className="w-[167px] h-[170px] rounded-lg ">
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
            </div>
            <div className="rounded-lg flex flex-col justify-between h-[75px] px-3">
                <div className="flex justify-between flex-col mt-2">
                    <p className="text-sm font-semibold truncate">{produto.Nome}</p>
                    <p className="text-lg text-end font-semibold text-red-600 mt-3">R$ {produto.PrecoF}</p>
                </div>
            </div>
        </Card>
    );
}

export default CarouselItems;