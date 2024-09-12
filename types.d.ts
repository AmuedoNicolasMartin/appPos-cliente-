export type Menu = {
    label: string;
    icon: string;
    href: string;
}

export type Categories = {
    category: string;
}

export type Products = {
    name: string;
    category: string;
    image: string;
    discount: number;
    stock: number;
    price: number;
    description: string;
}

export type cardProducts = {
    name: string;
    price: number;
    image: string;
    quantity: number;
}