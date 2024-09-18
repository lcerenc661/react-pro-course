import React from "react";
export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const ProductImage: ({ img, className, style }: Props) => React.JSX.Element;
export default ProductImage;
