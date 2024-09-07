import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { createContext } from "react";
import { ProductContextProps, Product, onChangeProps } from "../interfaces/interfaces";
import { ReactElement } from "react";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeProps) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value
}: Props) => {
  const { counter, increaseBy } = useProduct({onChange, product, value});
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={` ${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;
