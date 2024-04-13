import MenuItem from "./MenuItem";
import { GoHome } from "react-icons/go";
import { FaPhotoVideo } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
            <div className="flex gap-4">
                <MenuItem title="inicio" address="/" Icon={GoHome} />
                <MenuItem title="videos" address="/videos" Icon={FaPhotoVideo} />
                <MenuItem title="resultado" address="/resultados" Icon={FaClipboardList} />
            </div>
            <Link href="/" className="flex gap-1 items-center">
                <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">Sorte Entre Amigos</span>
            </Link>
        </div>
    )
}