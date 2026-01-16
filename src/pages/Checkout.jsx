import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import { useCart } from "../context/CartContext";
import toast, { Toaster } from 'react-hot-toast';

function Checkout() {
    const { cartItems, totalAmount, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cartItems.length === 0) {
            toast.error("Your cart is empty!");
            return;
        }
        // Simulate order placement
        console.log("Order Placed:", { items: cartItems, total: totalAmount, customer: formData });
        toast.success("Order Placed Successfully!");

        // Clear cart and redirect after delay
        setTimeout(() => {
            clearCart();
            navigate("/");
        }, 2000);
    };

    return (
        <div className="py-10 px-4 mt-24">
            <Toaster position="top-center" />
            <Container>
                <Heading
                    as="h1"
                    text="Checkout"
                    className="text-3xl md:text-4xl font-bold font-Frank text-center mb-10"
                />

                <Flex className="flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left: Shipping Info Form */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
                            <Heading as="h3" text="Shipping Information" className="text-xl font-semibold mb-6" />
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black transition-colors"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <Flex className="flex-col md:flex-row gap-4">
                                    <div className="w-full md:w-1/2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black transition-colors"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black transition-colors"
                                            placeholder="Enter your phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </Flex>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                    <textarea
                                        name="address"
                                        required
                                        rows="3"
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black transition-colors"
                                        placeholder="Enter your delivery address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right: Order Summary */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-200 sticky top-24">
                            <Heading as="h3" text="Order Summary" className="text-xl font-semibold mb-6" />

                            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                                {cartItems.map((item) => (
                                    <Flex key={item.id} className="justify-between items-start text-sm">
                                        <div>
                                            <p className="font-medium">{item.name} <span className="text-gray-500">x {item.quantity}</span></p>
                                        </div>
                                        <p className="font-semibold">৳{item.price * item.quantity}</p>
                                    </Flex>
                                ))}
                            </div>

                            <div className="border-t border-gray-300 pt-4 space-y-2">
                                <Flex className="justify-between">
                                    <span>Subtotal</span>
                                    <span>৳{totalAmount}</span>
                                </Flex>
                                <Flex className="justify-between">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </Flex>
                                <div className="border-t border-gray-300 pt-2 mt-2">
                                    <Flex className="justify-between text-lg font-bold">
                                        <span>Total</span>
                                        <span>৳{totalAmount}</span>
                                    </Flex>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Button
                                    btnName="Place Order (COD)"
                                    onClick={handleSubmit}
                                    className="w-full py-4 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                                />
                                <p className="text-xs text-center text-gray-500 mt-2">Cash on Delivery Available</p>
                            </div>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    );
}

export default Checkout;
