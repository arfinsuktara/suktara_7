import Container from "../common/Container";
import Flex from "../common/Flex";
import Heading from "../common/Heading";
import ProductCard from "../common/ProductCard";

import collection1 from "../../assets/kids/kids11.jpg";
import collection2 from "../../assets/kids/kids22.jpg";
import collection3 from "../../assets/kids/kids3.jpg";
import collection4 from "../../assets/kids/kids4.jpg";

const kidsCollectionItems = [
  {
    id: 601,
    name: "Boy's Shirt",
    price: 1100,
    image: collection1,
  },
  {
    id: 602,
    name: "Formal Pants",
    price: 1600,
    oldPrice: 1800,
    image: collection2,
  },
  {
    id: 603,
    name: "Winter Sweater",
    price: 1350,
    image: collection4,
  },
  {
    id: 604,
    name: "Kid's Sleeves",
    price: 900,
    oldPrice: 1200,
    image: collection3,
  },
];

function Collection() {
  return (
    <div className="py-8 md:py-10 px-4">
      <Container>
        <Heading
          as="h3"
          text="Kids Collection"
          className="text-center text-2xl sm:text-3xl md:text-[36px] font-pop font-bold pb-6 md:pb-10"
        />

        <Flex className="flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-6 md:gap-8">
          {kidsCollectionItems.map((item) => (
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
