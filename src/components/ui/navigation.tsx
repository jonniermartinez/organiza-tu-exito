import Image from "next/image"
import logo from "@/../public/logo.png"
import { Button } from "./button"
import { Badge } from "./badge"
function Navigation() {
    return (
        <nav className=" flex w-full max-w-screen border-b border-b-zinc-300/40 shadow-sm py-5  items-center justify-between">
            <a href="/">
                <Image
                    src={logo}
                    width={50}
                    alt="logo"
                    height={50}
                ></Image>
            </a>
            <Button variant="outline" className="flex flex-wrap gap-3 max-md:hidden">
                Obtiene acceso instantaneo
                <Badge variant="destructive">60% OFF!</Badge>
            </Button>
        </nav>
    )
}

export default Navigation
