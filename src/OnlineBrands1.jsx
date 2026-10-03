import nykaa from "./assets/nykaa450.webp";
import amazonpay from "./assets/amzon29.webp";
import bigbasket from "./assets/big75.webp";
import myntra from "./assets/myntra230.webp";
import zepto from "./assets/zepto75.webp";
import googleplay from "./assets/googel25.webp";
import hppay from "./assets/hp30.webp";
import lenskart from "./assets/len88.webp";

function OnlineBrands1() {
    let brands = [
        { id: 1, image: nykaa },
        { id: 2, image: amazonpay },
        { id: 3, image: bigbasket },
        { id: 4, image: myntra },
        { id: 5, image: zepto },
        { id: 6, image: googleplay },
        { id: 7, image: hppay },
        { id: 8, image: lenskart }
    ];

    return (
        <section className="w-full bg-[#f7f7fc] py-10 sm:py-12">
            <div className="mx-auto grid w-[90%] grid-cols-2 place-items-center gap-x-6 gap-y-8 sm:w-[85%] sm:grid-cols-3 sm:gap-x-10 md:w-[80%] md:grid-cols-4 md:gap-x-16 md:gap-y-12">
                {brands.map((item) => (
                    <div
                        key={item.id}
                        className="flex aspect-square w-full max-w-[230px] items-center justify-center"
                    >
                        <img
                            src={item.image}
                            alt="Brand offer"
                            className="h-full w-full cursor-pointer object-contain transition duration-200 hover:scale-[1.03]"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OnlineBrands1;
