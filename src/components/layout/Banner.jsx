import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import Heading from "../common/Heading";
import Button from "../common/Button";
import model from "../../assets/imgbanner.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="bg-headerBg py-12 md:py-20 lg:py-[115px] px-1">
      <Container>
        <Flex className="flex-col justify-center items-center md:flex-row gap-8 md:gap-4">
          <div className="w-full md:w-1/2">
            <Heading
              as="h1"
              text="Find The Best Fashion Style For You"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-center lg:text-start font-bold font-pop md:pr-12 lg:pr-28"
            />

            <Heading
              as="p"
              text="Discover the latest trends, premium quality outfits, and styles that perfectly match your personality."
              className="text-base sm:text-lg md:text-xl lg:text-[22px] text-center lg:text-start font-pop leading-7 md:leading-8 lg:leading-9 md:pr-20 lg:pr-40 py-3 md:py-5"
            />
            <div className="flex justify-center md:justify-start">
              <Link to="/visitor-stats">
                <Button
                  btnName="Visitors"
                  className="bg-black text-white py-3 px-10 md:py-4 md:px-12 lg:py-5 lg:px-14 rounded-lg uppercase text-sm md:text-base"
                />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 -ml-14 sm:-ml-24">
            <Image imgSrc={model} className="w-full h-auto" />
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Banner;