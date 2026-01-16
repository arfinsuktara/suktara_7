import Banner from "../components/layout/Banner"; // Reusing Banner for impact
import Shop from "../components/layout/Shop";

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
];

function NewArrival() {
    return (
        <>
            <Banner />
            <Shop
                title="New Arrivals"
                description="Fresh looks just landed. Shop the latest trends now."
                products={newArrivals}
            />
        </>
    );
}

export default NewArrival;
