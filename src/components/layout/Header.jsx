import { Link } from "react-router-dom";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import Button from "../common/Button";
import Menu from "../common/Menu";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="bg-headerBg py-4">
      <Container>
        <Flex className="items-center">
          <div className="w-[10%]">
            <Image imgSrc={logo} />
          </div>

          <ul className="w-[60%] pt-4">
            <Flex className="justify-center gap-x-6">
              <Menu link="/" menuName="Home" />
              <Menu link="/men" menuName="Men" />
              <Menu link="/women" menuName="Women" />
              <Menu link="/kids" menuName="Kids" />
              {/* <Menu link="/collection" menuName="Collection" /> */}
              <Menu link="/new-arrival" menuName="New Arrival" />
              <Menu link="/contact" menuName="Contact" />
            </Flex>
          </ul>

          <div className="w-[30%] flex justify-end">
            <Link to="/login">
              <Button
                btnName="Login"
                className="py-[5px] px-[10px] mr-2 border border-btnBdr hover:bg-btnHover hover:rounded-xl"
              />
            </Link>
            <Link to="/signup">
              <Button
                btnName="SignUp"
                className="py-[5px] px-[10px] border border-btnBdr hover:bg-btnHover hover:rounded-xl"
              />
            </Link>
          </div>
        </Flex>
      </Container>
    </header>
  );
}

export default Header;
