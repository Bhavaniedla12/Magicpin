import { foodBrands, fashionBrands } from "./data/brands";
function Brands() {
    return (
        <section className="w-full bg-[#f8f8fc] px-4 py-10 sm:px-8 md:px-12 lg:px-[11vw] lg:py-[5vh]">
            <h1 className="text-center text-2xl font-bold text-[#4020a5] sm:text-3xl md:text-4xl lg:text-[3.2vw]">
                Lowest prices for all your favourite stores
            </h1>

            {/* Line */}
            <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-[#8d7be8] to-transparent lg:mt-[2vh]"></div>

            {/* Food Delivery */}
            <div className="mt-10 lg:mt-[9vh]">
                <h2 className="text-center text-xl font-bold text-[#303b80] sm:text-2xl lg:text-[2.2vw]">
                    Top
                    <span className="text-[#d72572]">{" Food Delivery "}</span>
                    Brands
                </h2>
                <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:mt-[4vh] lg:flex lg:justify-between lg:gap-[2vw]">
                    {foodBrands.map((brand) => (
                        <div
                            key={brand.id}
                            className="
                                flex
                                aspect-square
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-[#d9d0ff]
                                bg-white
                                shadow-sm
                                lg:aspect-auto
                                lg:h-[11vw]
                                lg:w-[10.5vw]
                                lg:flex-shrink-0
                                lg:rounded-[2vw]
                            "
                        >
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="h-[65%] w-[65%] object-contain lg:h-[7.5vw] lg:w-[7.5vw]"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 lg:mt-[9vh]">
                <h2 className="text-center text-xl font-bold text-[#303b80] sm:text-2xl lg:text-[2.2vw]">
                    Top
                    <span className="text-[#d72572]">{" Fashion "}</span>
                    Brands
                </h2>
                <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:mt-[4vh] lg:flex lg:justify-between lg:gap-[2vw]">
                    {fashionBrands.map((brand) => (
                        <div
                            key={brand.id}
                            className="
                                flex
                                aspect-square
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-[#ffd1e1]
                                bg-white
                                shadow-sm
                                lg:aspect-auto
                                lg:h-[11vw]
                                lg:w-[10.5vw]
                                lg:flex-shrink-0
                                lg:rounded-[2vw]
                            "
                        >
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="h-[65%] w-[65%] object-contain lg:h-[7.5vw] lg:w-[7.5vw]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Brands;
