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
    <div className="bg-shopBg pb-[191px] pt-[36px] mt-[230px]">
      <Container>
        <Flex className="gap-x-12">
          {/* Left Text Section */}
          <div className="w-1/3">
            <Heading
              as="h1"
              text="Best Seller Product"
              className="text-[64px] font-bold font-Frank text-white"
            />

            <Heading
              as="p"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              className="text-[24px] font-Frank leading-9 py-5 text-white"
            />

            <Button
              btnName="Learn More"
              className="bg-black text-white py-5 px-14 rounded-lg uppercase"
            />
          </div>

          {/* Product 1 */}
          <div className="">
            <Image imgSrc={shopimg1} />

            <div className="py-5 text-4xl bg-white px-3">
              <Flex className="pt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-iconcolor" />
                ))}
              </Flex>

              <Heading
                as="h3"
                text="Sweater Shirt"
                className="text-[22px] font-pop font-semibold py-[15px]"
              />

              <Flex className="gap-x-5">
                <Heading
                  as="p"
                  text="$45.99"
                  className="text-[24px] font-pop text-[#C4C4C4]"
                />
                <Heading
                  as="p"
                  text="$35.99"
                  className="text-[24px] font-pop text-black"
                />
              </Flex>
            </div>
          </div>

          {/* Product 2 */}
          <div className="">
            <Image imgSrc={shopimg2} />

            <div className="py-5 text-4xl bg-white px-3">
              <Flex className="pt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-iconcolor" />
                ))}
              </Flex>

              <Heading
                as="h3"
                text="Pants Fashion"
                className="text-[22px] font-pop font-semibold py-[15px]"
              />

              <Flex className="gap-x-6">
                <Heading
                  as="p"
                  text="$55"
                  className="text-[24px] font-pop text-[#C4C4C4]"
                />
                <Heading
                  as="p"
                  text="$44.99"
                  className="text-[24px] font-pop text-black"
                />
              </Flex>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Shop;
