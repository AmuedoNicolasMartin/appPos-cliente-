import React, {Fragment} from "react"
import { menu } from "../../assets/asset"
import Link from "next/link"
import { cn } from "../../lib/utils"
import { Dispatch, SetStateAction } from "react"

interface MenumovileProps {
    isOpen: boolean,
    onClose: Dispatch<SetStateAction<boolean>> /*Recibe la funcion Seter del UseState 
    del componente Header como Prop.*/
}

const Menumovile : React.FC<MenumovileProps> = ({isOpen, onClose}) => {
    return(
        <Fragment>
            <div className={cn("fixed flex flex-col items-center justify-center right-0 w-72 h-full lg:hidden bg-background-foreground z-50 transition-all",
                isOpen ? "top-0 delay-300" : "-top-full"
            )}>
                <ul className="flex flex-col gap-y-4 ">
                {menu.map((menu)=>{
                    return(
                    <li key={menu.href}>
                    <Link href={menu.href} className={cn("flex flex-col items-center gap-x-1  p-3 text-sm rounded-full",
                        menu.href === '/menu' ? "bg-primary font-medium" : "hover:bg-background/70"
                    )}>
                        <i className={menu.icon}></i>
                        {menu.label}
                    </Link>
                    </li>)
                })}
                </ul>
            </div>
            <div role="button" className={cn("fixed lg:hidden bg-black/40  z-40 transition-all",
                isOpen ? "w-full h-full right-0 top-0" : "w-0 h-0 bottom-0 left-0 delay-300"
            )} onClick={() => onClose(false)}></div>
        </Fragment>
    )
}

export default Menumovile;