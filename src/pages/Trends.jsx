import Collection from "../components/layout/Collection";
import Counter from "../components/layout/Counter";
import Shop from "../components/layout/Shop";

import shopimg1 from "../assets/shopimg1.png";
import shopimg2 from "../assets/shopimg2.png";

const trendProducts = [
  {
    id: 401,
    name: "Trending Sweater",
    price: 3800,
    oldPrice: 4200,
    image: shopimg1,
  },
  {
    id: 402,
    name: "Urban Pants",
    price: 4600,
    image: shopimg2,
  },
];

function Trends() {
  return (
    <>
      <Collection />
      <Counter />
      <Shop
        title="Trending Now"
        description="Check out what's trending this week."
        products={trendProducts}
      />
    </>
  );
}

export default Trends;
