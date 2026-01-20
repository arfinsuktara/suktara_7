import Container from "../common/Container";
import Flex from "../common/Flex";
import Heading from "../common/Heading";
import Button from "../common/Button";
import ProductCard from "../common/ProductCard";

function Shop({
  title = "Best Seller Product",
  description = "Explore our best sellers, carefully selected for quality, comfort, and trend.",
  products = []
}) {
  return (
    <div className="mt-48">
      <div className="bg-shopBg pb-12 sm:pb-20 md:pb-32 lg:pb-[191px] pt-40 sm:pt-8 md:pt-10 lg:pt-[36px] mt-32 sm:mt-40 md:mt-48 lg:mt-[230px]">
        <Container>
          <Flex className="flex-col lg:flex-row gap-6 md:gap-8 lg:gap-x-12 px-4">
            {/* Left Text Section */}
            <div className="w-full lg:w-1/3 text-center lg:text-left my-auto">
              <Heading
                as="h1"
                text={title}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold font-Frank text-white"
              />

              <Heading
                as="p"
                text={description}
                className="text-base sm:text-lg md:text-xl lg:text-[24px] font-Frank leading-7 md:leading-8 lg:leading-9 py-4 md:py-5 text-white"
              />

              {/* <Button
                btnName="Learn More"
                className="bg-black text-white py-3 px-10 md:py-4 md:px-12 lg:py-5 lg:px-14 rounded-lg uppercase text-sm md:text-base"
              /> */}
            </div>

            {/* Products Container */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {products.length > 0 ? (
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <p className="text-white">No products available</p>
                )}
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
}

export default Shop;
