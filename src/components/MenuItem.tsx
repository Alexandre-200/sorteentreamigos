
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

interface MenuItemProps {
    title: string,
    address: string,
    Icon: React.ElementType
}

export default function MenuItem({ title, address, Icon }: MenuItemProps) {
    return (
        <Link href={address} className="hover:text-amber-500">
            <Icon className="text-2xl sm:hidden"/>
            <p className="uppercase hidden sm:inline text-sm ">{title}</p>
        </Link>

    )
}