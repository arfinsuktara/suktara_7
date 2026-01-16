import { IoCloseSharp } from "react-icons/io5";
import { useCart } from "../../context/CartContext";
import Heading from "./Heading";
import Image from "./Image";
import Button from "./Button";
import Flex from "./Flex";

const CartSidebar = () => {
    const { isCartOpen, toggleCart, cartItems, removeFromCart, totalAmount, updateQuantity } = useCart();

    return (
        <>
            {/* Overlay */}
            {isCartOpen && (
                <div
                    onClick={toggleCart}
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                />
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-[300px] sm:w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full flex flex-col p-4 md:p-6">
                    {/* Header */}
                    <Flex className="justify-between items-center border-b pb-4">
                        <Heading as="h3" text="Shopping Cart" className="text-xl font-bold font-pop" />
                        <button
                            onClick={toggleCart}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <IoCloseSharp className="text-2xl" />
                        </button>
                    </Flex>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto py-4 space-y-4">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-10 text-gray-500">
                                <p>Your cart is empty</p>
                                <button onClick={toggleCart} className="mt-4 text-black underline">Continue Shopping</button>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 border-b pb-4">
                                    <div className="w-20 h-20 flex-shrink-0">
                                        <Image imgSrc={item.image} className="w-full h-full object-cover rounded" />
                                    </div>
                                    <div className="flex-1">
                                        <Flex className="justify-between items-start">
                                            <div>
                                                <Heading as="h4" text={item.name} className="font-semibold" />
                                                <p className="text-sm text-gray-500">৳{item.price}</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 text-xs hover:text-red-700"
                                            >
                                                Remove
                                            </button>
                                        </Flex>

                                        <Flex className="items-center mt-2 gap-3">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-6 h-6 flex items-center justify-center border rounded hover:bg-gray-100"
                                            >
                                                -
                                            </button>
                                            <span className="text-sm">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-6 h-6 flex items-center justify-center border rounded hover:bg-gray-100"
                                            >
                                                +
                                            </button>
                                        </Flex>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    <div className="border-t pt-4 mt-auto">
                        <Flex className="justify-between items-center mb-4">
                            <Heading as="span" text="Subtotal:" className="font-semibold text-lg" />
                            <Heading as="span" text={`৳${totalAmount.toFixed(2)}`} className="font-bold text-xl" />
                        </Flex>
                        <Button
                            btnName="Checkout"
                            className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartSidebar;
