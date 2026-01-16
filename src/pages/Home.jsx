import Banner from "../components/layout/Banner";
import Collection from "../components/layout/Collection";
import Counter from "../components/layout/Counter";
import Shop from "../components/layout/Shop";

import shopimg1 from "../assets/shopimg1.png";
import shopimg2 from "../assets/shopimg2.png";

// Product Data
const bestSellers = [
  {
    id: 1,
    name: "Sweater Shirt",
    price: 3500,
    oldPrice: 4500,
    image: shopimg1,
  },
  {
    id: 2,
    name: "Pants Fashion",
    price: 4499,
    oldPrice: 5500,
    image: shopimg2,
  },
  {
    id: 3,
    name: "Stylish Jacket",
    price: 2500,
    image: shopimg1,
  },
  {
    id: 4,
    name: "Casual Jeans",
    price: 1800,
    image: shopimg2,
  },
];

function Home() {
  return (
    <>
      <Banner />
      <Collection />
      <Counter />
      <Shop products={bestSellers} />
    </>
  );
}

export default Home;
