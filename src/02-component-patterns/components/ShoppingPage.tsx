import { ProductCard, ProductImage, ProductButtons, ProductTitle } from ".";
import { products } from "../data/prooducts";

import "../styles/custom-styles.css";
import useShoppingCart from "../hooks/useShoppingCart";

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}
            />
            <ProductTitle title={"Luchito ceren"} className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, value]) => {
          const { count, ...product } = value;
          return (
            <ProductCard
              product={product}
              className="bg-dark text-white"
              style={{ width: "100px" }}
              key={key}
              value={count}
              onChange={onProductCountChange}
            >
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}
              />
              <ProductButtons
                className="custom-buttons"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ProductCard>
          );
        })}
      </div>

      <div>
        <code>{JSON.stringify(shoppingCart, null, 2)}</code>
      </div>
    </div>
  );
};

export default ShoppingPage;
