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
    <div className="py-10">
      <Container>
        <Heading
          as="h3"
          text="New Collection"
          className="text-center text-[36px] font-pop font-bold pb-10"
        />

        <Flex className="justify-between">
          <div className="w-[350px] rounded-lg relative">
            <Image imgSrc={collection1} />
            <Button
              btnName="Sweater"
              className="bg-white rounded-2xl py-2 px-20 absolute left-1/2 bottom-7 -translate-x-1/2"
            />
          </div>

          <div className="w-[350px] rounded-lg relative">
            <Image imgSrc={collection2} />
            <Button
              btnName="Jeans"
              className="bg-white rounded-2xl py-2 px-20 absolute left-1/2 bottom-7 -translate-x-1/2"
            />
          </div>

          <div className="w-[350px] rounded-lg relative h-[402px]">
            <Image imgSrc={collection3} className="h-full" />
            <Button
              btnName="Baskets"
              className="bg-white rounded-2xl py-2 px-20 absolute left-1/2 bottom-7 -translate-x-1/2"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Collection;
