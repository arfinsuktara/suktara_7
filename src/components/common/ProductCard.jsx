import { FaStar } from "react-icons/fa";
import Heading from "./Heading";
import Flex from "./Flex";
import Image from "./Image";
import Button from "./Button";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="w-full group">
            <div className="relative overflow-hidden rounded-t-lg">
                <Image imgSrc={product.image} className="w-full" />
                <div className="absolute bottom-[-100%] group-hover:bottom-0 left-0 w-full transition-all duration-300">
                    <Button
                        btnName="Add to Cart"
                        onClick={() => addToCart(product)}
                        className="w-full py-4 bg-black text-white hover:bg-gray-800 transition-colors"
                    />
                </div>
            </div>

            <div className="py-4 md:py-5 bg-white px-3 md:px-4 rounded-b-lg shadow-sm border border-gray-100">
                <Flex className="pt-2 md:pt-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg md:text-xl" />
                    ))}
                </Flex>

                <Heading
                    as="h3"
                    text={product.name}
                    className="text-lg md:text-xl lg:text-[22px] font-pop font-semibold py-3 md:py-[15px]"
                />

                <Flex className="gap-x-3 md:gap-x-5 items-center">
                    {product.oldPrice && (
                        <Heading
                            as="p"
                            text={`৳${product.oldPrice}`}
                            className="text-lg md:text-xl lg:text-[24px] font-pop text-[#C4C4C4] line-through"
                        />
                    )}

                    <Heading
                        as="p"
                        text={`৳${product.price}`}
                        className="text-lg md:text-xl lg:text-[24px] font-pop text-black font-semibold"
                    />
                </Flex>
            </div>
        </div>
    );
};

export default ProductCard;
