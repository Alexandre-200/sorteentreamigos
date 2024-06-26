import Image from "next/image"

export default function Footer() {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <p className=" flex flex-auto text-justify max-w-xs uppercase mt-10">Que a sorte nos sorria, que os números se alinhem e que cada sorteio seja uma chance a mais para realizarmos nossos sonhos</p>
            <Image className="rounded-full orange-shadow mt-10 mb-10"
                src="/trevo.png"
                width={150}
                height={150}
                alt="imagem do logo"
            />
        </div>
    )
}