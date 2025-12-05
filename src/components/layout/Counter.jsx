import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import Heading from "../common/Heading";
import picture from "../../assets/picture.png";

function Counter() {
  return (
    <div className="py-6 relative">
      <Container>
        <Flex>
          <div className="w-1/2">
            <Image imgSrc={picture} className="w-full" />
          </div>

          <div className="w-1/2 pl-24 pt-4">
            <Heading
              as="h1"
              text="Best Fashion Since 2010"
              className="text-[64px] font-bold font-pop pr-28"
            />

            <Heading
              as="p"
              text="Fashion is a form of self-expression that reflects personal style and creativity.
It evolves constantly, influenced by culture, art, and trends.
From classic to modern, fashion allows individuals to showcase their identity.
Clothing, accessories, and hairstyles all play a role in creating a unique look.
Fashion is not just about appearance but also confidence and attitude.
Sustainable fashion is gaining importance, focusing on eco-friendly choices.
Streetwear, haute couture, and casual wear each tell a different story.
Fashion weeks around the world inspire designers and enthusiasts alike."
              className="text-[18px] text-justify font-pop leading-9 py-5"
            />
          </div>
        </Flex>

        {/* Counter Box */}
        <div className="w-[780px] bg-counterBg rounded-lg p-16 text-center absolute bottom-[-150px] left-1/2 -translate-x-1/2 z-0">
          <Flex className="justify-between">
            {/* Item 1 */}
            <div className="w-1/3 border-r-2 border-black">
              <Heading as="h3" text="2010" className="font-bold text-[64px]" />
              <Heading as="h4" text="Founded" className="font-pop text-[28px]" />
            </div>

            {/* Item 2 */}
            <div className="w-1/3 border-r-2 border-black">
              <Heading
                as="h3"
                text="5000+"
                className="font-bold text-[64px]"
              />
              <Heading as="h4" text="Product Sold" className="font-pop text-[28px]" />
            </div>

            {/* Item 3 */}
            <div className="w-1/3">
              <Heading
                as="h3"
                text="4500+"
                className="font-bold text-[64px]"
              />
              <Heading as="h4" text="Best Reviews" className="font-pop text-[28px]" />
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
}

export default Counter;
