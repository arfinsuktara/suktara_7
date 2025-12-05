import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import Heading from "../common/Heading";
import Button from "../common/Button";
import model from "../../assets/imgbanner.png";

function Banner() {
  return (
    <div className="bg-headerBg py-[115px]">
      <Container>
        <Flex>
          <div className="w-1/2">
            <Heading
              as="h1"
              text="Find The Best Fashion Style For You"
              className="text-[64px] font-bold font-pop pr-28"
            />

            <Heading
              as="p"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              className="text-[22px] font-pop leading-9 pr-40 py-5"
            />

            <Button
              btnName="Shop Now"
              className="bg-black text-white py-5 px-14 rounded-lg uppercase"
            />
          </div>

          <div className="w-1/2">
            <Image imgSrc={model} />
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Banner;
