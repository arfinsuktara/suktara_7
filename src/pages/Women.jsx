import Collection from "../components/layout/Collection";
import Counter from "../components/layout/Counter";
import Shop from "../components/layout/Shop";

import collection1 from "../assets/collection1.png";
import collection2 from "../assets/collection2.png";
import shopimg1 from "../assets/shopimg1.png";

const womenProducts = [
  {
    id: 101,
    name: "Women's Sweater",
    price: 3200,
    oldPrice: 4000,
    image: collection1,
  },
  {
    id: 102,
    name: "Designer Jeans",
    price: 4800,
    image: collection2,
  },
  {
    id: 103,
    name: "Winter Jacket",
    price: 5500,
    oldPrice: 6000,
    image: shopimg1,
  },
];

function Women() {
  return (
    <>
      <Collection />
      <Counter />
      <Shop
        title="Women's Collection"
        description="Discover the latest trends in women's fashion."
        products={womenProducts}
      />
    </>
  );
}

export default Women;
