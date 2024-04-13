import Link from "next/link";

interface CardProps {
    titulo: string,
    url: string,
    pathImg: string,
    cor: string
}

export default function Card({ titulo, url, pathImg, cor }: CardProps) {
    return (
        <div className={`flex justify-center items-center border border-3 ${cor} w-200 h-35`}>
            <Link href={url} passHref>
                <img className={``}
                    src={`${pathImg}`}
                    width="200px"
                    height="200px"
                />
                <a target="_blank" className="flex justify-center bg-amber-500"> {titulo}</a>

            </Link>
        </div>
    )
}