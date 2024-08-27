import {
  ProductCard,
  ProductImage,
  ProductButtons,
  ProductTitle,
} from "../componets";

const ShoppingPage = () => {
  const product = {
    id: "1",
    title: "Coffee Mug - Card",
    img: "./coffee-mug.png",
  };

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          {/* <ProductCard.Buttons /> */}
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={"Hello world"} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
