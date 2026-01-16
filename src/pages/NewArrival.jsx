import Container from "../components/common/Container";
import Heading from "../components/common/Heading";
import ProductCard from "../components/common/ProductCard";

import img1 from "../assets/collection1.png";
import img2 from "../assets/collection2.png";
import img3 from "../assets/shopimg1.png";
import img4 from "../assets/shopimg2.png";

const newArrivals = [
    {
        id: 701,
        name: "Modern Tunics",
        price: 2900,
        oldPrice: 3500,
        image: img1,
    },
    {
        id: 702,
        name: "Classic Denim",
        price: 4200,
        image: img2,
    },
    {
        id: 703,
        name: "Urban Jacket",
        price: 5600,
        image: img3,
    },
    {
        id: 704,
        name: "Streetwear Pants",
        price: 3100,
        oldPrice: 3800,
        image: img4,
    },
    {
        id: 705,
        name: "Casual Tee",
        price: 1500,
        image: img1,
    },
    {
        id: 706,
        name: "Winter Coat",
        price: 6500,
        oldPrice: 7500,
        image: img3,
    },
    {
        id: 707,
        name: "Slim Fit Jeans",
        price: 2200,
        image: img2,
    },
    {
        id: 708,
        name: "Summer Dress",
        price: 3200,
        image: img4,
    },
];

function NewArrival() {
    return (
        <div className="mt-28 md:mt-32 pb-20 px-4">
            <Container>
                <div className="text-center mb-12 md:mb-16">
                    <Heading
                        as="h1"
                        text="New Arrivals"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold font-Frank text-black mb-4"
                    />
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-pop">
                        Discover the latest trends and fresh looks just added to our collection.
                        Shop now and stay ahead of the fashion curve.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {newArrivals.map((product) => (
                        <div key={product.id} className="w-full">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default NewArrival;
