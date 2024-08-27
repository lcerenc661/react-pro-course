import { default as ProductCardHOC } from './ProductCard';
import ProductButtons from './ProductButtons';
import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import { ProductCardProps } from '../interfaces/interfaces';

export { default as ProductImage } from './ProductImage';
export { default as ProductTitle } from './ProductTitle';
export { default as ProductButtons } from './ProductButtons';


export const ProductCard: ProductCardProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Buttons: ProductButtons, 
    Image: ProductImage,
})
