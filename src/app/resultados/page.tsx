import Card from "@/components/Card";
import Image from "next/image";

export default async function Resultados() {

    const bolasQuina = [1, 2, 3, 4, 5];
    const bolasLotofacil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const bolasMega = [1, 2, 3, 4, 5, 6];

    return (
        <div className="flex-col mx-auto space-y-4">
            <Card titulo="quina de são joão" foto="quina" data="em breve" premio="em breve" cor="bg-blue-500" bolas={bolasQuina} grid="grid-cols-5" />
            <Card titulo="lotofacil de independência" foto="lotofacil" data="em breve" premio="em breve" cor="bg-purple-500" bolas={bolasLotofacil}  grid="grid-cols-5"/>
            <Card titulo="mega sena da virada" foto="megasena" data="em breve" premio="em breve" cor="bg-green-500" bolas={bolasMega} grid="grid-cols-6"/>            
        </div>
    )
}