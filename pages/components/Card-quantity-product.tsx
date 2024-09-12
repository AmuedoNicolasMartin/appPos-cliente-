import { cardProducts } from "@/types";
import Image from "next/image";
import React, { Fragment } from "react";

interface cardQuantityProductProps {
    cardProductProp : cardProducts
}

const CardQuantityProduct : React.FC<cardQuantityProductProps> = ({cardProductProp}) => {

    const { name, price, image, quantity } = cardProductProp

    return (
        <Fragment>
        <div className="flex items-center justify-between gap-x-5">
            <div className="flex items-center gap-x-4">
                <Image src={image} 
                alt="ErrorImg" width={100} height={100} 
                className="w-14 h-14 object-contain"/>
                <h5 className="text-lg font-bold line-clamp-1">{name}</h5>
            </div>
            <span className="flex items-center w-10 h-10 justify-center text-sm font-medium rounded-full bg-background">
            x{quantity}
            </span>
        </div>
        <div className="flex items-center justify-between gap-x-5 mt-3">
            <div className="flex items-center gap-x-2">
                <button type="button" className=" w-8 h-8 flex items-center bg-primary justify-center rounded-full">
                    <i className="fi fi-br-plus"></i>
                </button>
                <button type="button" className="w-8 h-8 flex items-center bg-primary justify-center rounded-full">
                    <i className="fi fi-br-minus"></i>
                </button>
            </div>
            <h3 className="text-lg font-medium">${(quantity * price).toFixed(2)}</h3>
        </div>
        </Fragment>
    )
}

export default CardQuantityProduct