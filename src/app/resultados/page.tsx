export default function Resultados() {

    const bolasQuina = [1, 2, 3, 4, 5];
    const bolasLotofacil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const bolasMega = [1, 2, 3, 4, 5, 6];

    return (
        <div className="flex-col mx-auto space-y-4">
            <div className="flex justify-center items-center border border-black p-4 bg-blue-500">
                <div className="flex-col  ">
                    <p className="flex justify-center"> Quina de São João 2024 </p>
                    <p> Data do sorteio: 01/01/2021</p>
                    <div className="flex gap-3">
                        {
                            bolasQuina.map((bola) => (
                                <p className="rounded-full bg-white text w-12 e h-12 flex items-center justify-center border border-black text-black">
                                    {""}
                                </p>
                            ))
                        }
                    </div>
                </div>


            </div>

            <div className=" flex justify-center items-center border border-black p-4 bg-purple-500">
                <div className="flex-col  ">
                    <p className="flex justify-center uppercas"> Lotofácil de Independência 2024 </p>
                    <p> Data do sorteio: 01/01/2021</p>
                    <div className="grid grid-cols-5 gap-3">
                        {
                            bolasLotofacil.map((bola) => (
                                <p className="rounded-full bg-white text w-12 e h-12 flex items-center justify-center border border-black text-black">
                                    {""}
                                </p>
                            ))
                        }
                    </div>
                </div>


            </div>

            <div className=" flex justify-center items-center border border-black p-4 bg-green-500">
                <div className="flex-col  ">
                    <p className="flex justify-center"> Mega-Sena da virada 2024 </p>
                    <p> Data do sorteio: 01/01/2021</p>
                    
                    <div className="flex gap-3">
                        {
                            bolasMega.map((bola) => (
                                <p className="rounded-full bg-white text w-12 e h-12 flex items-center justify-center border border-black text-black">
                                    {""}
                                </p>
                            ))
                        }
                    </div>
                </div>


            </div>
        </div>


    )
}