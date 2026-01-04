import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import Heading from "../common/Heading";
import picture from "../../assets/picture.png";

function Counter() {
  return (
    <div className="py-6 md:py-8 lg:py-6 relative mb-32 sm:mb-40 md:mb-44 lg:mb-[150px]">
      <Container>
        <Flex className="flex-col md:flex-row gap-6 md:gap-0">
          <div className="w-80 mx-auto sm:w-2/3 md:w-1/2">
            <Image imgSrc={picture} className="w-full rounded-lg" />
          </div>

          <div className="w-full md:w-1/2 px-4 md:pl-12 lg:pl-24 md:pt-4">
            <Heading
              as="h1"
              text="Best Fashion Since 2010"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold font-pop md:pr-12 lg:pr-28"
            />

            <Heading
              as="p"
              text="Fashion is a form of self-expression that reflects personal style and creativity.
It evolves constantly, influenced by culture, art, and trends.
From classic to modern, fashion allows individuals to showcase their identity.
Clothing, accessories, and hairstyles all play a role in creating a unique look.
Fashion is not just about appearance but also confidence and attitude."
              className="text-sm sm:text-base md:text-[16px] lg:text-[18px] text-justify font-pop leading-6 md:leading-7 lg:leading-9 py-4 md:py-5"
            />
          </div>
        </Flex>

        {/* Counter Box */}
        <div className="w-[90%] sm:w-[85%] md:w-[700px] lg:w-[780px] bg-counterBg rounded-lg p-6 sm:p-10 md:p-12 lg:p-16 text-center absolute bottom-[-320px] sm:bottom-[-130px] md:bottom-[-140px] lg:bottom-[-220px] left-1/2 -translate-x-1/2 z-0">
          <Flex className="flex-col sm:flex-row justify-between gap-6 sm:gap-0">
            {/* Item 1 */}
            <div className="w-full sm:w-1/3 sm:border-r-2 border-black ">
              <Heading as="h3" text="2010" className="font-bold text-4xl sm:text-5xl md:text-[56px] lg:text-[64px]" />
              <Heading as="h4" text="Founded" className="font-pop text-lg sm:text-xl md:text-2xl lg:text-[28px] mt-2" />
            </div>

            {/* Item 2 */}
            <div className="w-full sm:w-1/3 sm:border-r-2 border-black  sm:pb-0 border-t-2 sm:border-t-0 pt-3 sm:pt-0">
              <Heading
                as="h3"
                text="5000+"
                className="font-bold text-4xl sm:text-5xl md:text-[56px] lg:text-[64px]"
              />
              <Heading as="h4" text="Product Sold" className="font-pop text-lg sm:text-xl md:text-2xl lg:text-[28px] mt-2" />
            </div>

            {/* Item 3 */}
            <div className="w-full sm:w-1/3 border-t-2 sm:border-t-0 sm:pt-0">
              <Heading
                as="h3"
                text="4500+"
                className="font-bold text-4xl sm:text-5xl md:text-[56px] lg:text-[64px]"
              />
              <Heading as="h4" text="Best Reviews" className="font-pop text-lg sm:text-xl md:text-2xl lg:text-[28px] mt-2" />
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
}

export default Counter;