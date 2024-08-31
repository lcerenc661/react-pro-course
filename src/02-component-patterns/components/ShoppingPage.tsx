import { ProductCard, ProductImage, ProductButtons, ProductTitle } from ".";

import "../styles/custom-styles.css";

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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.1)'}} />
          <ProductTitle title={"Luchito ceren"} className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{backgroundColor: '#70D1F8'}}>
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.1)'}}/>
          <ProductTitle title={"Luchito ceren"} style={{fontWeight: 'bold'}} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'flex-end'}} />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
