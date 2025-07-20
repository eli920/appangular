// Interface

export interface Product {
    id: string,
    image: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    offer: boolean,
    quantity: number;
}