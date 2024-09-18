import React from "react";
export interface Props {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const ProductTitle: ({ title, className, style }: Props) => React.JSX.Element;
export default ProductTitle;
