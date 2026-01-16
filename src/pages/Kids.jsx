import Collection from "../components/kids/Collection";
import Counter from "../components/kids/Counter";
import Shop from "../components/layout/Shop";

import kids1 from "../assets/kids/kids1.jpg";
import kids2 from "../assets/kids/kids2.jpg";
import kids3 from "../assets/kids/kids3.jpg";
import kids4 from "../assets/kids/kids4.jpg";

const kidsProducts = [
  {
    id: 201,
    name: "Summer T-Shirt",
    price: 1200,
    oldPrice: 1500,
    image: kids1,
  },
  {
    id: 202,
    name: "Denim Jacket",
    price: 2800,
    image: kids2,
  },
  {
    id: 203,
    name: "Casual Shorts",
    price: 1500,
    image: kids3,
  },
  {
    id: 204,
    name: "Kids Hoodie",
    price: 2200,
    oldPrice: 2800,
    image: kids4,
  },
];

function Kids() {
  return (
    <>
      <Collection />
      <Counter />
      <Shop
        title="Kids Fashion"
        description="Comfortable and stylish clothing for your little ones."
        products={kidsProducts}
      />
    </>
  );
}

export default Kids;