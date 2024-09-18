import React from "react";
import { ProductContextProps, Product, onChangeProps, InitialValues, ProductCartHandlers } from "../interfaces/interfaces";
export interface Props {
    product: Product;
    children: (args: ProductCartHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeProps) => void;
    value?: number;
    initialValues?: InitialValues;
}
export declare const ProductContext: React.Context<ProductContextProps>;
declare const ProductCard: ({ children, product, className, style, onChange, value, initialValues, }: Props) => React.JSX.Element;
export default ProductCard;
