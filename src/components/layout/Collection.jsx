import Container from "../common/Container";
import Flex from "../common/Flex";
import Heading from "../common/Heading";
import ProductCard from "../common/ProductCard";

import collection1 from "../../assets/collection1.png";
import collection2 from "../../assets/collection2.png";
import collection3 from "../../assets/collection3.png";

const collectionItems = [
  {
    id: 501,
    name: "Sweater",
    price: 2500,
    oldPrice: 3000,
    image: collection1,
  },
  {
    id: 502,
    name: "Jeans",
    price: 3500,
    image: collection2,
  },
  {
    id: 503,
    name: "Baskets",
    price: 1800,
    oldPrice: 2200,
    image: collection3,
  },
];

function Collection() {
  return (
    <div className="py-8 md:py-10 px-4">
      <Container>
        <Heading
          as="h3"
          text="Women Collection"
          className="text-center text-2xl sm:text-3xl md:text-[36px] font-pop font-bold pb-6 md:pb-10"
        />

        <Flex className="flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-6 md:gap-8">
          {collectionItems.map((item) => (
            <div key={item.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[350px]">
              <ProductCard product={item} />
            </div>
          ))}
        </Flex>
      </Container>
    </div>
  );
}

export default Collection;