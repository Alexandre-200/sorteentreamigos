
import Image from "next/image";
interface CardProps {
    titulo: string,
    premio: string,
    data: string,
    foto: string,
    cor: string,
    grid:string,
    bolas: number[]
}

export default function Card({ titulo, premio, data, foto, bolas, cor, grid }: CardProps) {
    return (
        <div className={`flex justify-center items-center p-4 ${cor}`}>
            <div className="flex flex-col  items-center  ">
                <p className="flex justify-center text-white uppercase">{`${titulo} 2024`} </p>
                <Image
                    className="border border-spacing-2 rounded-lg"
                    src={`/${foto}.png`}
                    width={300}
                    height={300}
                    alt="imagem quina" />
                <p className="flex justify-center m-2 text-white uppercase">{`Previsão do prêmio: ${premio}`}</p>
                <p className="text-center m-2 text-white uppercase">{`Data prevista do sorteio: ${data}`}</p>
                <div className={`grid ${grid} gap-3`}>
                    {
                        bolas.map((bola) => (
                            <p key={bola} className="rounded-full bg-white text w-12 e h-12 flex items-center justify-center border border-black text-black">
                                {""}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}