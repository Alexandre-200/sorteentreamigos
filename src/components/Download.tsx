interface DownloadProps{
    caminho: string,
    nome: string
}

export default function Download({caminho, nome}: DownloadProps){
    return (
        <div className="flex flex-col text-center ">
            <p className="uppercase">Download da planilha para conferência</p>
            <a href={`caminho/do/seu/arquivo/${caminho}`} download className="uppercase hover:bg-amber-500">clique aqui.</a>
        </div>
    )
}