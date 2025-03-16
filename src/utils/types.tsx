export type ObjectId = string;
export type Product = {
    _id: ObjectId;
    name: string;
    brand: string;
    price: number;
    capacity: string;
    speed: string;
    type: string;
    latency: string;
    rgb: string;
    description: string;
    images: string[];
    raters: string;
    points: number;
};

export type ProductCardProps = {
    product: Product;
};
