import Image from "next/image";

export default function Resultados() {

    const bolasQuina = [1, 2, 3, 4, 5];
    const bolasLotofacil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const bolasMega = [1, 2, 3, 4, 5, 6];

    return (
        <div className="flex-col mx-auto space-y-4">
            <div className="flex justify-center items-center p-4 bg-blue-500">
                <div className="flex flex-col  items-center  ">
                    <p className="flex justify-center text-white uppercase"> Quina de São João 2024 </p>
                    <Image
                        className="border border-spacing-2 rounded-lg"
                        src="/quina.png"
                        width={300} 
                        height={300}
                        alt="imagem quina"/>
                    <p className="flex justify-center m-2 text-white uppercase">Previsão do prêmio: Em Breve</p>
                    <p className="flex justify-center m-2 text-white uppercase">Data do sorteio: Em Breve</p>
                    <div className="flex gap-3">
                        {
                            bolasQuina.map((bola) => (
                                <p key={bola} className="rounded-full bg-white text w-12 e h-12 flex items-center justify-center border border-black text-black">
                                    {""}
                                </p>
                            ))
                        }
                    </div>
                </div>


            </div>

            <div className=" flex justify-center items-center  p-4 bg-purple-500">
                <div className="flex flex-col  items-center">
                    <p className="text-center uppercase text-white"> Lotofácil de Independência 2024 </p>
                    <Image
                        className="border border-spacing-2 rounded-lg"
                        src="/lotofacil.png"
                        width={300} 
                        height={300}
                        alt="imagem lotofacil"/>
                    <p className="flex justify-center m-2 text-white uppercase">Previsão do prêmio: Em Breve</p>
                    <p className="text-center m-2 text-white uppercase">Data do sorteio: Em Breve</p>
                    <div className="grid grid-cols-5 gap-3">
                        {
                            bolasLotofacil.map((bola) => (
                                <p key={bola} className="rounded-full bg-white text w-12 e h-12 flex items-center justify-center border border-black text-black">
                                    {""}
                                </p>
                            ))
                        }
                    </div>
                </div>


            </div>

            <div className="flex justify-center items-center p-4 bg-green-500">
                <div className="flex flex-col items-center">
                    <p className="text-center uppercase text-white">Mega-Sena da Virada 2024</p>
                    <Image
                        className="border border-spacing-2 rounded-lg"
                        src="/megasena.png"
                        width={300}
                        height={300}
                        alt="Mega-Sena"
                    />
                    <p className="flex justify-center m-2 text-white uppercase">Previsão do prêmio: Em Breve</p>
                    <p className="uppercase text-white">Data do sorteio: Em Breve</p>
                    <div className="flex gap-3">
                        {bolasMega.map((bola) => (
                            <p key={bola} className="rounded-full bg-white w-12 h-12 flex items-center justify-center border border-black text-black">
                                {""}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}