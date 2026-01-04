import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import Button from "../common/Button";
import Heading from "../common/Heading";

import collection1 from "../../assets/collection1.png";
import collection2 from "../../assets/collection2.png";
import collection3 from "../../assets/collection3.png";

function Collection() {
  return (
    <div className="py-8 md:py-10  px-4">
      <Container>
        <Heading
          as="h3"
          text="Women Collection"
          className="text-center text-2xl sm:text-3xl md:text-[36px] font-pop font-bold pb-6 md:pb-10"
        />

        <Flex className="flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-6 md:gap-8">
          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[350px] rounded-lg relative mx-auto sm:mx-0">
            <Image imgSrc={collection1} className="w-full h-auto rounded-lg" />
            <Button
              btnName="Sweater"
              className="bg-white rounded-2xl py-2 px-12 sm:px-16 md:px-20 absolute left-1/2 bottom-5 md:bottom-7 -translate-x-1/2 text-sm md:text-base"
            />
          </div>

          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[350px] rounded-lg relative mx-auto sm:mx-0">
            <Image imgSrc={collection2} className="w-full h-auto rounded-lg" />
            <Button
              btnName="Jeans"
              className="bg-white rounded-2xl py-2 px-12 sm:px-16 md:px-20 absolute left-1/2 bottom-5 md:bottom-7 -translate-x-1/2 text-sm md:text-base"
            />
          </div>

          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[350px] rounded-lg relative mx-auto sm:mx-0 h-auto lg:h-[402px]">
            <Image imgSrc={collection3} className="w-full h-full rounded-lg object-cover" />
            <Button
              btnName="Baskets"
              className="bg-white rounded-2xl py-2 px-12 sm:px-16 md:px-20 absolute left-1/2 bottom-5 md:bottom-7 -translate-x-1/2 text-sm md:text-base"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Collection;