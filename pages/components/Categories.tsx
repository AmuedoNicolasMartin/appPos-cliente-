import { categories } from "@/assets/asset";
import React, { useRef } from "react";

interface onScrollProp {
    onScroll : (scrHorizontal: boolean) => void; //Prop de tipo funcion...
}

const Categories : React.FC<onScrollProp> = ({onScroll}) => {

    const scrollRef = useRef<HTMLUListElement>(null); //Accedo al elemento ul y lo guardo en esta constante.

    const handleWheel = (event: React.WheelEvent) => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += event.deltaY; // Cambia el desplazamiento vertical por horizontal(el deltaY se lo sumo a la posicion en X)
            event.preventDefault(); // Evita el scroll vertical por defecto(pero el deltaY sigue existiendo aunque no vea el movimiento en Y.)
        }
    };

    return(
        <div className="overflow-y-hidden w-full"//Evito scroll vertical en la caja div
        onMouseEnter={()=>onScroll(true)} onMouseLeave={()=>onScroll(false)}>{/*Aca envio el cn overflow del <main> de Layout*/}
        {/*onMouseEnter = 'CON FOCO' y onMouseLeave = 'SIN FOCO'*/}
        <ul 
         ref={scrollRef} //La referencia a cual de los ul se refiere(en este caso al unico que hay.).
         onWheel={handleWheel} //Si cambia el valor del atributo "ruedita" del ul elemento.
        className="flex items-center gap-x-1 flex-nowrap border border-black/10 max-w-full
        p-1 overflow-x-auto rounded-full"> {/*overflow-x-auto para scroll horizontal */}
            <li>
                <button type="button" className="py-3 px-6 bg-primary font-medium rounded-full">
                    Todas
                </button>
            </li>
            {categories.map((category)=>
                (
                    <li key={category.category}>
                        <button type="button" className="py-3 px-6 font-medium rounded-full hover:bg-white/30 transition-colors">
                            {category.category}
                        </button>
                    </li>
                )
            )}
        </ul>
        </div>
    )
}

export default Categories