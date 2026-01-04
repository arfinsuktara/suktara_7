import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import Heading from "../common/Heading";
import Button from "../common/Button";
import { FaStar } from "react-icons/fa";

import shopimg1 from "../../assets/shopimg1.png";
import shopimg2 from "../../assets/shopimg2.png";

function Shop() {
  return (
<div className="mt-48">
      <div className="bg-shopBg pb-12 sm:pb-20 md:pb-32 lg:pb-[191px] pt-40 sm:pt-8 md:pt-10 lg:pt-[36px] mt-32 sm:mt-40 md:mt-48 lg:mt-[230px]">
      <Container>
        <Flex className="flex-col lg:flex-row gap-6 md:gap-8 lg:gap-x-12 px-4">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/3 text-center lg:text-left my-auto">
            <Heading
              as="h1"
              text="Best Seller Product"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold font-Frank text-white"
            />

            <Heading
              as="p"
              text="Explore our best sellers, carefully selected for quality, comfort, and trend."
              className="text-base sm:text-lg md:text-xl lg:text-[24px] font-Frank leading-7 md:leading-8 lg:leading-9 py-4 md:py-5 text-white"
            />

            <Button
              btnName="Learn More"
              className="bg-black text-white py-3 px-10 md:py-4 md:px-12 lg:py-5 lg:px-14 rounded-lg uppercase text-sm md:text-base"
            />
          </div>

          {/* Products Container */}
          <div className="w-full lg:w-2/3">
            <Flex className="flex-col sm:flex-row gap-6 md:gap-8">
              {/* Product 1 */}
              <div className="w-full sm:w-1/2">
                <Image imgSrc={shopimg1} className="w-full rounded-t-lg" />

                <div className="py-4 md:py-5 bg-white px-3 md:px-4 rounded-b-lg">
                  <Flex className="pt-2 md:pt-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-iconcolor text-lg md:text-xl" />
                    ))}
                  </Flex>

                  <Heading
                    as="h3"
                    text="Sweater Shirt"
                    className="text-lg md:text-xl lg:text-[22px] font-pop font-semibold py-3 md:py-[15px]"
                  />

                  <Flex className="gap-x-3 md:gap-x-5">
                    <Heading
                      as="p"
                      text="$45.99"
                      className="text-lg md:text-xl lg:text-[24px] font-pop text-[#C4C4C4] line-through"
                    />
                    <Heading
                      as="p"
                      text="$35.99"
                      className="text-lg md:text-xl lg:text-[24px] font-pop text-black font-semibold"
                    />
                  </Flex>
                </div>
              </div>

              {/* Product 2 */}
              <div className="w-full sm:w-1/2">
                <Image imgSrc={shopimg2} className="w-full rounded-t-lg" />

                <div className="py-4 md:py-5 bg-white px-3 md:px-4 rounded-b-lg">
                  <Flex className="pt-2 md:pt-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-iconcolor text-lg md:text-xl" />
                    ))}
                  </Flex>

                  <Heading
                    as="h3"
                    text="Pants Fashion"
                    className="text-lg md:text-xl lg:text-[22px] font-pop font-semibold py-3 md:py-[15px]"
                  />

                  <Flex className="gap-x-3 md:gap-x-6">
                    <Heading
                      as="p"
                      text="$55"
                      className="text-lg md:text-xl lg:text-[24px] font-pop text-[#C4C4C4] line-through"
                    />
                    <Heading
                      as="p"
                      text="$44.99"
                      className="text-lg md:text-xl lg:text-[24px] font-pop text-black font-semibold"
                    />
                  </Flex>
                </div>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
</div>
  );
}

export default Shop;