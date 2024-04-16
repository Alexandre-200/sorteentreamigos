import Video from "@/components/Video"

export default function Videos() {
  return (
    <div className="flex justify-center items-center ">
      <div className="gap-5 xl:grid xl:grid-cols-2 " >

        <Video videoId="JHFgIStjQsE" width={460} height={260} titulo="O que acontece quando faço jogos com mais da quantidade de dezenas possíveis." />
        <Video videoId="3r0BCDu5bYI" width={460} height={260} titulo="Qual o problema em fazer varias apostas com vários números para o mesmo sorteio?" />
        <Video videoId="tcNtZTdFrhM" width={460} height={260} titulo="Como evitar o problema de jogos repetidos em apostas com varias dezenas." />


      </div>
    </div>
  )
}
