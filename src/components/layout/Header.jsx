import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import Button from "../common/Button";
import Menu from "../common/Menu";
import logo from "../../assets/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-headerBg py-4 px-4">
      <Container>
        <Flex className="items-center justify-between">
          {/* Logo */}
          <div className="w-24 sm:w-28 md:w-32 lg:w-[10%]">
            <Image imgSrc={logo} className="w-full" />
          </div>

          {/* Hamburger Menu Button - Mobile */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:w-[60%] pt-4">
            <ul className="w-full">
              <Flex className="justify-center gap-x-6">
                <Menu link="/" menuName="Home" />
                <Menu link="/kids" menuName="Kids" />
                <Menu link="/women" menuName="Women" />
                <Menu link="/new-arrival" menuName="New Collection" />
                <Menu link="/contact" menuName="Contact" />
              </Flex>
            </ul>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex lg:w-[30%] justify-end">
            <Link to="/login">
              <Button
                btnName="Login"
                className="py-[5px] px-[10px] mr-2 border border-btnBdr hover:bg-btnHover hover:rounded-xl transition-all"
              />
            </Link>
            <Link to="/signup">
              <Button
                btnName="SignUp"
                className="py-[5px] px-[10px] border border-btnBdr hover:bg-btnHover hover:rounded-xl transition-all"
              />
            </Link>
          </div>
        </Flex>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <nav className="bg-white rounded-lg shadow-lg p-4  z-50">
            <ul className="flex flex-col gap-4" onClick={() => setIsMenuOpen(false)}>
              <Menu link="/" menuName="Home" className="block py-2 px-4 hover:bg-gray-100 rounded" />
              <Menu link="/men" menuName="Men" className="block py-2 px-4 hover:bg-gray-100 rounded" />
              <Menu link="/women" menuName="Women" className="block py-2 px-4 hover:bg-gray-100 rounded" />
              <Menu link="/kids" menuName="Kids" className="block py-2 px-4 hover:bg-gray-100 rounded" />
              <Menu link="/new-arrival" menuName="New Arrival" className="block py-2 px-4 hover:bg-gray-100 rounded" />
              <Menu link="/contact" menuName="Contact" className="block py-2 px-4 hover:bg-gray-100 rounded" />
              
              {/* Login and Signup in Menu */}
              <li className="border-t border-gray-200 ">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <div className="block py-2 px-4 hover:bg-gray-100 rounded text-center border border-btnBdr hover:bg-btnHover">
                    Login
                  </div>
                </Link>
              </li>
              <li className="pb-5">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <div className="block py-2 px-4 hover:bg-gray-100 rounded text-center border border-btnBdr hover:bg-btnHover">
                    SignUp
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;