
import styles from "../styles/styles.module.css";
import noImage from "../assests/no-image.jpg";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

const ProductImage = ({ img = "" }) => {
    const { product } = useContext(ProductContext);
    const imageToShow = img ? img : product.img;
    return (
      <img
        className={styles.productImg}
        src={imageToShow ? imageToShow : noImage}
        alt={"Product"}
      />
    );
  };

export default ProductImage