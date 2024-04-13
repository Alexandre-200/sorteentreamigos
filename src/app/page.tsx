import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 " >
        <Card
          titulo="Como funciona o grupo"
          url="https://www.youtube.com"
          pathImg="jogos.jpg"
          cor="bg-amber-500"
        />
        <Card
          titulo="Como Jogar na Quina"
          url="https://www.youtube.com"
          pathImg="quina.png"
          cor="bg-blue-400"
        />
        <Card
          titulo="Como Jogar na Lotofacil"
          url="https://www.youtube.com"
          pathImg="lotofacil.png"
          cor="bg-purple-400"
        />
        <Card
          titulo="Como jogar na Mega-Sena"
          url="https://www.youtube.com"
          pathImg="megasena.png"
          cor="bg-green-500"
        />
        <Card
          titulo="Por que jogar em grupo"
          url="https://www.youtube.com"
          pathImg=""
          cor="bg-amber-500"
        />
      </div>
    </div>
  );
}
