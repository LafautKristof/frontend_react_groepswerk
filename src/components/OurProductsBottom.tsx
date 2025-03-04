import styles from "../css/OurProductsBottom.module.css";
import ProductCard from "./ProductCard";
import useSWR from "swr";
import { useEffect, useState } from "react";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const OurProductsBottom = () => {
    const {
        data: products,
        error,
        isLoading,
    } = useSWR(
        "https://backend-node-groepswerk.onrender.com/api/products/mouse",
        fetcher
    );

    if (error) return <div>Error loading products</div>;
    if (isLoading) return <div>Loading...</div>;
    return (
        <div className={styles.our_products_bottom}>
            {products &&
                products.map(
                    (product: any) => (
                        console.log(product),
                        (<ProductCard key={product._id} product={product} />)
                    )
                )}
        </div>
    );
};
export default OurProductsBottom;
