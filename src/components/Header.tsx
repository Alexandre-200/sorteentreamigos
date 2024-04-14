import MenuItem from "./MenuItem";
import { IoHome } from "react-icons/io5";
import { FaPhotoVideo } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { TfiYoutube } from "react-icons/tfi";
import Image from "next/image";
import Audio from "./Audio";

export default function Header() {

    return (

        <div>
            <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
                <div className="flex justify-center items-center gap-4">


                    <Image className="rounded-full orange-shadow"
                        src="trevo.png"
                        width={150}
                        height={150}
                        alt="imagem do logo"
                    />

                    <MenuItem title="inicio" address="/" Icon={IoHome} />

                    <MenuItem title="resultados" address="/resultados" Icon={FaClipboardList} />
                    <MenuItem title="videos" address="/videos" Icon={FaPhotoVideo} />
                    <MenuItem title="canal do youtube" address="https://youtube.com" Icon={TfiYoutube} />

                </div>
                <div className="flex items-center gap-4">

                    <DarkModeSwitch />
                    {
                        //<Link href="/" className="flex gap-1 items-center">
                        //    <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">Sorte Entre Amigos</span>
                        //</Link>
                    }
                </div>

            </div>
            <div className="flex justify-center dark:bg-gray-600 bg-amber-100 p-4 mb-3">
                <Audio/>
            </div>
        </div>

    )
}