import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = shoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      // Delete product

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return { ...rest };
    });

    // =======>>>> BEST AND FIRST IMPLEMENTATION

    // if (count === 0) {
    //   const { [product.id]: toDelete, ...rest } = shoppingCart;
    //   console.log(rest);
    //   setShoppingCart(rest);
    //   return;
    // }

    // setShoppingCart((oldShoppingCart) => {
    //   return {
    //     ...oldShoppingCart,
    //     [product.id]: { ...product, count },
    //   };
    // });
  };

  return {shoppingCart, onProductCountChange};
};

export default useShoppingCart;
