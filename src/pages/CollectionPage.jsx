import Banner from "../components/layout/Banner";
import Collection from "../components/layout/Collection";
import Counter from "../components/layout/Counter";
import Shop from "../components/layout/Shop";

import collection1 from "../assets/collection1.png";
import collection2 from "../assets/collection2.png";
import collection3 from "../assets/collection3.png";

const collectionProducts = [
  {
    id: 301,
    name: "Summer Collection",
    price: 5000,
    image: collection1,
  },
  {
    id: 302,
    name: "Winter Collection",
    price: 7000,
    oldPrice: 8500,
    image: collection2,
  },
  {
    id: 303,
    name: "Spring Collection",
    price: 4500,
    image: collection3,
  },
];

function CollectionPage() {
  return (
    <>
      <Collection />
      <Counter />
      <Shop
        title="Exclusive Collection"
        description="Hand-picked items for our exclusive collection."
        products={collectionProducts}
      />
    </>
  );
}

export default CollectionPage;