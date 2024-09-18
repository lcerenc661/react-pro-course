/// <reference types="react" />
import { Props as ProductCardComponentProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsComponentProps } from "../components/ProductButtons";
export interface Product {
    id: string;
    title: string;
    img?: string;
}
export interface ProductButtonsProps {
    counter: number;
    increaseBy: (value: number) => void;
}
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number;
}
export interface ProductCardProps {
    ({ product, children }: ProductCardComponentProps): JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: (Props: ProductButtonsComponentProps) => JSX.Element;
}
export interface onChangeProps {
    product: Product;
    count: number;
}
export interface ProductInCart extends Product {
    count: number;
}
export interface InitialValues {
    count?: number;
    maxCount?: number;
}
export interface ProductCartHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}
