import React, { ReactNode, useState } from "react";
import Header from "./Header";
import Categories from "./Categories";
import { products } from "@/assets/asset";
import Image from "next/image";
import CardProduct from "./Card-product";
import { cn } from "@/lib/utils";
import Cart from "./Cart";


const Layout: React.FC = () => {

    const [scrollHorizontal, setScroll] = useState(false)

    const handleScroll = (scrHorizontal: boolean) => {
        setScroll(scrHorizontal)
    }

    return (
        <div className="h-[100dvh]">
            <section className="h-[10dvh] py-1 px-5">
                <Header />
            </section>
            <section className="h-[90dvh] flex lg:gap-x-4">
                <main className={cn("bg-green-100 basis-4/4 lg:basis-3/4 p-5 lg:pr-2",
                    scrollHorizontal ? "overflow-hidden" : "overflow-y-auto"//Si hago foco en categories o si no lo hago.
                )}>
                    <Categories onScroll={handleScroll}/>
                    <ul className="grid md:grid-cols-2 gap-5  mt-8">
                        {products.map(product => (
                            <li key={product.name}>
                              <CardProduct producto={product}/>
                            </li>
                        ))}
                    </ul>
                </main>
                <div className="bg-blue-100 lg:basis-1/4 p-5 lg:pl-2">
                    <Cart/>
                </div>
            </section>
        </div>
    )
}

export default Layout;