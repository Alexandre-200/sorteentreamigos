import Card from "@/components/Card";
import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center ">
      <div className="gap-5  xl:grid xl:grid-cols-2 " >

        <Video videoId="QTAOPD-M5mQ" width={460} height={260} titulo="Conheça os bastidores dos sorteios das Loterias CAIXA" />
      
      </div>
    </div>
  );
}
