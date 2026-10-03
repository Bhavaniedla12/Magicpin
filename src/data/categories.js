import fashion from "../assets/Shoe.png";
import foodDelivery from "../assets/Bike.png";
import budgetDining from "../assets/Lemon.png";
import onlineVouchers from "../assets/Amzon.png";
import fineDining from "../assets/wine.png";
import nearMe from "../assets/Near me.png";

const categories = [
    {
        id: 1,
        title: "Fashion",
        tag: "Going Out",
        image: fashion
    },
    {
        id: 2,
        title: "Food Delivery",
        tag: "Going Out",
        offer: "Deals at ₹9",
        image: foodDelivery
    },
    {
        id: 3,
        title: "Budget Dining",
        tag: "Going Out",
        image: budgetDining
    },
    {
        id: 4,
        title: "Online Vouchers",
        tag: "Going Out",
        image: onlineVouchers
    },
    {
        id: 5,
        title: "Fine Dining",
        tag: "Going Out",
        image: fineDining
    },
    {
        id: 6,
        title: "Near Me",
        tag: "Going Out",
        image: nearMe
    }
];

export default categories;