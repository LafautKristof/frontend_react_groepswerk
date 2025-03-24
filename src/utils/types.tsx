export type ObjectId = string;

export type Product = {
    _id: ObjectId;
    name: string;
    brand?: string;
    price: number;
    type?: string;
    switches?: string;
    connectivity?: string | string[];
    rgb?: boolean;
    description: string;
    images: string[];
    raters: number;
    points: number;
    color?: string | string[];
    dpi?: number;
    noise_cancelling?: boolean;
    size?: string;
    resolution?: string;
    refresh_rate?: string;
    panel?: string;
    response_time?: string;
    sale: number;
    quantiy?: number;
};

export type ProductsResponse = {
    data: Product[];
};

export type ProductCardProps = {
    product: Product;
};

export type LoginResponse = {
    message: string;
    user: User;
    token: string;
};

export type LoginCredentials = {
    email_phone: string;
    password: string;
};

export type User = {
    _id: string;
    name: string;
    email_phone: string;
    cart: CartItem[];
    role: string;
};

export type AuthState = {
    user: User | null;
};

export type AddToCartRequest = {
    product: Product;
    user: any;
};

export type AddToCartResponse = {
    success: boolean;
    cart: Product[];
};
export interface CartItem extends Product {
    quantity: number;
}

export type CartState = {
    items: CartItem[];
};
