import React, { Fragment, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { menu } from "../../assets/asset";
import Image from "next/image";
import { cn } from "../../lib/utils";
import Menumovile from "./Menu-movile"

const Header : React.FC = () => {

    const [showMenuMovile, setShowMenuMovile] = useState<boolean>(false)

    return (
        <Fragment>
        <header className="flex items-center justify-between">
            <section>
                <Logo/>
            </section>
            <section className="hidden lg:block"> {/*en vista grande mostrate sino por defecto ya estas hidden(oculto)*/}
               <nav>
                <ul className="flex items-center gap-x-1 px-2 rounded-full bg-background-foreground">
                {menu.map((menu)=>{
                    return(
                    <li key={menu.href}>
                    <Link href={menu.href} className={cn("flex items-center gap-x-1  p-3 text-sm rounded-full",
                        menu.href === '/menu' ? "bg-primary font-medium" : "hover:bg-background/70"
                    )}>
                        <i className={menu.icon}></i>
                        {menu.label}
                    </Link>
                    </li>)
                })}
                </ul>
               </nav>
            </section>
            <section>
                <ul className="flex items-center gap-x-3 bg-background-foreground p-1 rounded-full">
                    <li className="flex items-center gap-x-2">
                        <Image src="https://c.wallhere.com/photos/d6/67/women_model_brunette_police_ass-335283.jpg!d" 
                        alt="Error Image" width={100} height={100} className="w-10 h-10 object-cover rounded-full"/>
                    </li>
                    <h5 className="font-medium">Antonella</h5>
                    <li>
                        <button type="button" className="flex items-center bg-background text-xl w-10 h-10 justify-center rounded-full">
                            <i className="fi fi-rr-settings"></i>
                        </button>
                    </li>
                    <li className="lg:hidden">{/*En vista grande ocultate*/}
                        <button type="button" className="flex items-center bg-background text-xl w-10 h-10 justify-center rounded-full"
                        onClick={()=>setShowMenuMovile(true)}>
                            <i className="fi fi-rr-bars-staggered"></i>
                        </button>
                    </li>
                </ul>
            </section>
        </header>                             
        <Menumovile isOpen={showMenuMovile} onClose={setShowMenuMovile}/>{/*Aca me llevo la funcion Seter(como prop)*/}
        </Fragment>
    )
}

export default Header;