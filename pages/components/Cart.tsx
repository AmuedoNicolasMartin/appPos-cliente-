import { cardProduct } from "@/assets/asset";
import React, { Fragment, useState } from "react";
import CardQuantityProduct from "./Card-quantity-product";
import { cn } from "@/lib/utils";
/*
NADA : ancho menor de 640px (chicos/moviles)
sm : ancho mínimo de 640 px. (medianos)
md : ancho mínimo de 768px. (medianos_full)
lg : ancho mínimo de 1024 px.(grandes/tablets)
xl : ancho mínimo de 1280px.(grandes_full)
2xl : ancho mínimo de 1536px.(Gigantes)
*/
const Cart : React.FC = () => {

    const [showCart, setShowCart] = useState<boolean>(false);

    const subtotalByProduct = cardProduct.map(product => (
        product.price * product.quantity
    ));
    const subtotal = subtotalByProduct.reduce((resultado,item)=> resultado + item);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;
    return(
        <Fragment>
        <aside className={cn("flex flex-col fixed xl:static right-0 bg-background xl:bg-transparent p-5 xl:p-0 gap-y-8 2xl:gap-y-4 h-full z-50 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-full transition-all",
            showCart ? "top-0 delay-300" : "-top-full"
        )}>
            <div className="relative basis-1/12">{/*Padre relative hijo absolute es para poder darle a los hijos una posicion exacta al invocar top-tanto,left-tanto etc... */}
                <i className="fi fi-rr-search absolute left-4  top-4 text-primary"></i>
                <input className="h-[58px] pl-12 pr-4 rounded-full outline-none w-full" placeholder="Buscar producto"></input>
            </div>
            <div className="flex flex-col basis-11/12 overflow-y-auto bg-background-foreground rounded-4xl p-6">
                <section className="basis-1/12">
                    <h1 className="text-2xl font-medium">Detalles de la orden</h1>
                </section>
                <ul className="basis 8/12 max-h-full overflow-y-auto">
                    {cardProduct.map(cardproduct =>(
                        <li key={cardproduct.name} className="border p-3 rounded-3xl mb-3">
                            <CardQuantityProduct cardProductProp={cardproduct}/>
                        </li>
                    ))}
                </ul>
                <section className="basis-3/12 flex flex-col pt-2 justify-between gap-y-2">
                <ul className="space-y-1 2xl:space-y-3">
                    <li className="flex items-center justify-between">
                        <p className="text-grey-500">Subtotal:</p>
                        <h3 className="text-lg font-bold">${subtotal.toFixed(2)}</h3>
                    </li>
                    <li className="flex items-center justify-between">
                        <p className="text-grey-500">IVA:</p>
                        <h3 className="text-lg font-bold">${iva.toFixed(2)}</h3>
                    </li>
                    <li className="flex items-center justify-between">
                        <p className="text-grey-500">Total:</p>
                        <h3 className="text-lg font-bold">${total.toFixed(2)}</h3>
                    </li>
                </ul>
                <button type="button" className="p-4 font-medium w-full bg-primary rounded-full hover:tracking-widest transition-all">
                    Confirmar orden
                </button>
                </section>
            </div>
        </aside>
        <button onClick={()=>setShowCart(true)} type="button" className="xl:hidden fixed bg-black text-white bottom-0 right-0 w-14 h-14 rounded-tl-xl z-30">
            <i className="fi fi-rr-shopping-cart"></i>
        </button>
        <div role="button" onClick={()=>setShowCart(false)} className={cn("bg-black/40  fixed transition-all",
            showCart ? "w-full h-full top-0 right-0" : "w-0 h-0 left-0 bottom-0 delay-300" //Efecto de diseño:(achicar o agrandar la caja hacia un lado especifico.)
        )}></div>
        </Fragment>
    )
}

export default Cart