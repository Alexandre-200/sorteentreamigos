interface VideoProps {
    videoId: string;
    width?: number;
    height?: number;
    titulo: string
}

export default function Video({ videoId, width, height, titulo }: VideoProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            <iframe
                className="rounded-lg"
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <p className=" mb-5 mt-2 uppercase text-sm max-w-xs flex flex-auto text-justify">{titulo}</p>
        </div>
    )
}