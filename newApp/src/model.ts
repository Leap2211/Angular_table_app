export interface Product{
    id: number;
    name: string;
    image: string;
    category: string;
    quantity: number;
    price: number;
    status: Status;

}

export enum Status{
    InStock = 'IN STOCK',
    LowStock = 'LOW STOCK',
    OutOfStock = 'OUT OF STOCK'
}