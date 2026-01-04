import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import Button from "../common/Button";
import Heading from "../common/Heading";

import collection1 from "../../assets/kids/kids11.jpg";
import collection2 from "../../assets/kids/kids22.jpg";
import collection3 from "../../assets/kids/kids3.jpg";
import collection4 from "../../assets/kids/kids4.jpg";

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
          {/* Card 1 */}
          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[350px] aspect-[4/5] rounded-lg relative mx-auto sm:mx-0">
            <Image
              imgSrc={collection1}
              className="w-full h-full rounded-lg object-cover"
            />
            <Button
              btnName="Shirt"
              className="bg-white rounded-2xl py-2 px-12 sm:px-16 md:px-20 absolute left-1/2 bottom-5 md:bottom-7 -translate-x-1/2 text-sm md:text-base"
            />
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[350px] aspect-[4/5] rounded-lg relative mx-auto sm:mx-0">
            <Image
              imgSrc={collection2}
              className="w-full h-full rounded-lg object-cover"
            />
            <Button
              btnName="Pants"
              className="bg-white rounded-2xl py-2 px-12 sm:px-16 md:px-20 absolute left-1/2 bottom-5 md:bottom-7 -translate-x-1/2 text-sm md:text-base"
            />
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[350px] aspect-[4/5] rounded-lg relative mx-auto sm:mx-0">
            <Image
              imgSrc={collection4}
              className="w-full h-full rounded-lg object-cover"
            />
            <Button
              btnName="Sweater"
              className="bg-white rounded-2xl py-2 px-12 sm:px-16 md:px-20 absolute left-1/2 bottom-5 md:bottom-7 -translate-x-1/2 text-sm md:text-base"
            />
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[350px] aspect-[4/5] rounded-lg relative mx-auto sm:mx-0">
            <Image
              imgSrc={collection3}
              className="w-full h-full rounded-lg object-cover"
            />
            <Button
              btnName="Sleeves"
              className="bg-white rounded-2xl py-2 px-12 sm:px-16 md:px-20 absolute left-1/2 bottom-5 md:bottom-7 -translate-x-1/2 text-sm md:text-base"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Collection;
