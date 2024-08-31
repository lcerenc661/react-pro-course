
import styles from "../styles/styles.module.css";
import noImage from "../assests/no-image.jpg";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProductImage = ({ img = "", className, style }: Props) => {
    const { product } = useContext(ProductContext);
    const imageToShow = img ? img : product.img;
    return (
      <img
        className={`${styles.productImg} ${className}`}
        src={imageToShow ? imageToShow : noImage}
        alt={"Product"}
        style={style}
      />
    );
  };

export default ProductImage