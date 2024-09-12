import React from "react";
import { Products } from "@/types";
import Image from "next/image";
import { cn } from "@/lib/utils";


interface productProp{
    producto: Products
}

const CardProduct : React.FC<productProp> = ({producto}) => {

   const { name,category,image,discount,stock,price,description } = producto

    return(
      <div className="bg-background-foreground rounded-4xl p-6 space-5">
        <div className="flex items-center">
            <Image src={image} alt="Error Img" width={50} height={50} className="w-24 h-24 object-contain rounded-2xl"/>
            <div className="space-y-2">
                <div className="flex items-center gap-x-2">
                    {
                        discount > 0 && <span className="py-1.5 px-2  bg-primary/10  text-primary rounded-full text-sm font-bold">
                            Discount {discount} %
                        </span>
                    }
                    {
                        stock <=0 && <span className="py-1.5 px-2 bg-red-500/10 text-red-500 rounded-full text-sm font-bold">
                            No disponible
                        </span>
                    }
                </div>
            </div>
            <h3 className="text-lg md:font-bold line-clamp-1">{name}</h3>
        </div>
        <p className="text-gray-500 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{price.toFixed(2)}</h3>
            <button type="button" className={cn("w-14 h-14 flex items-center justify-center rounded-full text-xl bg-primary border-4 border-background box-content",
                stock <= 0 ? "bg-background text-gray-500 cursor-default" : "bg-primary hover:rotate-90 transition-transform"
            )}>
                <i className="fi fi-br-plus"></i>
            </button>
        </div>
      </div>
    )
}

export default CardProduct